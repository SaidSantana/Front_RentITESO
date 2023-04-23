import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { User } from 'src/app/shared/Interface/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class UsersComponent implements OnInit{
  

  users: User[] = [];
  displayedColumns: string[] = ['Nombre', 'Apellido', 'Email', 'Rol', 'Acciones'];

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
      this.bringUsers();
      console.log(this.users);
  }

  bringUsers(){
    this.usersService.getUsers().subscribe(usersList => {
      this.users = usersList;
    });
  }

  deleteUser(userId: string){
    this.usersService.deleteUser(userId).subscribe(res => {
      console.log(res);
      location.reload();
    })
  }

  
}
