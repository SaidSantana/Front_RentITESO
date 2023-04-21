import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/Interface/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user!: User;

  constructor(private usersService: UsersService){}

  ngOnInit(){
    this.bringUser();
  }

  bringUser(){
    this.usersService.getUser('641e31abc712f3d079e52e8e').subscribe((user: User) => {
      this.user = user;
    });
    //console.log(this.user.apellido)
  }

  print(){
    console.log(this.user.nombre);
    console.log(this.user.email);
    console.log(this.user.image);
  }
}
