import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: []
})
export class LoginComponent {

  constructor(private loginService:LoginService) {}
  credentials = {
    username: '',
    password: '',
  };
  onSubmit() {
    // console.log('Form submitted');
    console.log(this.credentials);
    if (
      this.credentials.username !== '' &&
      this.credentials.password !== '' &&
      this.credentials.username !== null &&
      this.credentials.password !== null
    ) {
      // console.log('Login successful');
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          console.log(response);
          this.loginService.loginUser(response.token);
          window.location.href = '/dashboard';
          console.log('Login successful');
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      console.log('Login failed');
    }
  }
}
