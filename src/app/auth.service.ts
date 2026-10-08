import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  loggedin: boolean = false;
  public isLoggedin() {
    return this.loggedin;
  }
  public login() {
    return (this.loggedin = true);
  }
  public logout() {
    return (this.loggedin = false);
  }
}
