import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/shared/Interface/reserva';
import { ReservasService } from 'src/app/shared/services/reservas.service';
import { EquiposService } from 'src/app/shared/services/equipos.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/Interface/user';
import jwtDecode from 'jwt-decode';
import { UsersService } from 'src/app/shared/services/users.service';


@Component({
  selector: 'app-reservar-eq',
  templateUrl: './reservar-eq.component.html',
  styleUrls: ['./reservar-eq.component.scss']
})
export class ReservarEqComponent implements OnInit{

  selectedEquipo: any;
  selectedEquipoId: any;

  user!: User;
  token!: string;

  reserva: Reserva = {
    nombre: '',
    img: '',
    fecha: new Date,
    hora: '',
    cantidad: 0,
    id_user: ''
  };

  constructor(private reservaService: ReservasService, private router: Router, private equiposService: EquiposService,
    private route: ActivatedRoute, private authService: AuthService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.selectedEquipoId = this.route.snapshot.paramMap.get('id');
    console.log(this.selectedEquipoId);
    this.equiposService.getEquipo(this.selectedEquipoId).subscribe(equipo => {
      this.selectedEquipo = equipo;
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

  crearReserva() {
    this.reserva.nombre=this.selectedEquipo.nombre;
    this.reserva.img=this.selectedEquipo.imagen;
    this.reserva.id_user=this.user._id || '';
    this.reservaService.postReserva(this.reserva).subscribe(
      res => {
        this.router.navigate(['/equipo']);
      },
      err => {
        // hacer algo en caso de error
      }
    );
  }

}
