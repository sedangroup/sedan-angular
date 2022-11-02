import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/modelos/user.model';
import { UsersService } from 'src/app/servicios/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any={data:[]}
  
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe({
      next:(users)=>{
        this.users = users;
        console.log(this.users.data);
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
}
