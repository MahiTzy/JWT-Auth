import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,RouterLink,MatButtonModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public isLogged = false;
  constructor(private loginService:LoginService) {}
  ngOnInit() {
    this.isLogged = this.loginService.isLoggedIn();
  }
  logoutUser() {
    this.loginService.logout();
    location.reload();
  }
}
