import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/shared/Interface/equipo';
import { EquiposService } from 'src/app/shared/services/equipos.service';
import { User } from 'src/app/shared/Interface/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit{
  equipos: any[] = [];
  selectedEquipo: any;
  selectedEquipoId: any;

  usuario: number = 0; //temporal, implementar la verificacion con la info del usuario

  equipo: Equipo = {
    nombre: '',
    status: '',
    cantidad: 0,
    imagen: ''
  };

  user!: User;
  token!: string;

  constructor(private equiposService: EquiposService, private router: Router, private authService: AuthService, private usersService: UsersService){ }

  ngOnInit(): void {
      this.equiposService.getEquipos().subscribe(equipos => {
        this.equipos = equipos;
        console.log(equipos);
      });
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


  eliminarEquipo(equipoId: string){
    this.equiposService.deleteEquipos(equipoId).subscribe(() => {
      this.equipos = this.equipos.filter(equipo => equipo._id !== equipoId);
      location.reload();
    });
  }

  updateEquipo(id: number) {
    this.router.navigate(['/actualizar_eq', id]);
  }

  reservaEquipo(id: number) {
    this.router.navigate(['/reservar-eq', id]);
  }

}
