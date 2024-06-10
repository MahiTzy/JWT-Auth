import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  user:any;

  constructor(private userService:UserService) {}

  getUsers() {
    console.log('Getting users');
    this.userService.getUsers().subscribe(
      (response: any) => {
        console.log(response);
        this.user = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
