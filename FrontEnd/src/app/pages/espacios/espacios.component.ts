import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Espacio } from 'src/app/shared/Interface/espacio';
import { EspaciosService } from 'src/app/shared/services/espacios.service';
import { User } from 'src/app/shared/Interface/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.scss']
})
export class EspaciosComponent implements OnInit {
  espacios: any[] = [];
  selectedEspacio: any;
  selectedEspacioId: any;

  show: any;

  usuario: number = 0; //temporal, implementar la verificacion con la info del usuario

  espacio: Espacio = {
    nombre: '',
    status: '',
    image: '',
    stock: 0
  };

  user!: User;
  token!: string;

  constructor(private espaciosService: EspaciosService, private router: Router, private authService: AuthService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.espaciosService.getEspacios().subscribe(espacios => {
      this.espacios = espacios;
      console.log(espacios);
    });
    this.token = this.authService.getToken() as string;
    this.bringUser(this.token);
  }
  bringUser(token: string) {
    const decodedToken: any = jwtDecode(token);
    this.usersService.getUser(decodedToken._id).subscribe((user: User) => {
      this.user = user;
    });
    //console.log(this.user.apellido)
  }
  eliminarEspacio(espacioId: string) {
    this.espaciosService.deleteEspacios(espacioId).subscribe(() => {
      this.espacios = this.espacios.filter(espacio => espacio._id !== espacioId);
      location.reload();
    });
  }

  updateEspacio(id: number) {
    this.router.navigate(['/actualizar_es', id]);
  }

  reservaEspacio(id: number) {
    this.router.navigate(['/reservar-es', id]);
  }
}
