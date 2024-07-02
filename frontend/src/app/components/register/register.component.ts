import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register({ email: this.email, password: this.password }).subscribe(
      response => {
        console.log('Registration successful', response);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
