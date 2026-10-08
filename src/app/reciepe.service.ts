import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reciepe } from './models/Reciepe';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ReciepeService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3000/recipes';
  getReciepes(): Observable<Reciepe[]> {
    return this.httpClient.get<Reciepe[]>(this.apiUrl);
  }
  addReciepe(r: Reciepe): Observable<Reciepe> {
    return this.httpClient.post<Reciepe>(this.apiUrl, r);
  }
  updateReciepe(r: Reciepe): Observable<Reciepe> {
    return this.httpClient.put<Reciepe>(`${this.apiUrl}/${r.id}`, r);
  }
  deleteReciepe(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
