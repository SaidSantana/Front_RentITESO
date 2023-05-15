import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { User } from 'src/app/shared/Interface/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ReservasService } from 'src/app/shared/services/reservas.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {
  reservas: any[] = [];
  user!: User;
  token!: string;
  id: any;

  constructor(private reservaService: ReservasService, private router: Router, private authService: AuthService, private usersService: UsersService) { }


  ngOnInit(): void {
    this.token = this.authService.getToken() as string;
    this.bringUser(this.token);
  }

  bringUser(token: string) {
    const decodedToken: any = jwtDecode(token);
    this.usersService.getUser(decodedToken._id).subscribe((user: User) => {
      this.user = user;
      this.reservaService.getReservas(this.user._id || '').subscribe(reservas => {
        this.reservas = reservas;
      });
    });
  }

  deleteReserva(reserva: any){
    this.reservaService.delteReserva(reserva._id).subscribe(res => {
      console.log("Hola",res);
      this.router.navigate(['/espacios']);
    },
    (error) => {
      console.log(error);
      window.location.reload();
    });
  }

}
