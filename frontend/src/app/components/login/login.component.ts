import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
