import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/modelos/user.model';
import { UsersService } from 'src/app/servicios/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  users: user = {
    page: 0,    
    data: [
      {
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        avatar: '',
      },
    ],
    total: 0,
  };

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response;
        console.log(response)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
