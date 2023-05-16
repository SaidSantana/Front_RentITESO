import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/Interface/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user!: User;
  token!: string;

  constructor(private usersService: UsersService, private authService: AuthService){}

  ngOnInit(){
    this.token = this.authService.getToken() as string;
    this.bringUser(this.token);
  }

  bringUser(token: string){
    const decodedToken: any = jwtDecode(token);
    this.usersService.getUser(decodedToken._id).subscribe((user: User) => {
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
