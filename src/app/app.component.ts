import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reciepe-box';
  constructor(private authService: AuthService) {}
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
