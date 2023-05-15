import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/shared/Interface/reserva';
import { ReservasService } from 'src/app/shared/services/reservas.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/Interface/user';
import jwtDecode from 'jwt-decode';
import { UsersService } from 'src/app/shared/services/users.service';
import { EspaciosService } from 'src/app/shared/services/espacios.service';

@Component({
  selector: 'app-reservar-es',
  templateUrl: './reservar-es.component.html',
  styleUrls: ['./reservar-es.component.scss']
})
export class ReservarEsComponent implements OnInit{

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
  
  constructor(private reservaService: ReservasService, private router: Router, private espacioService: EspaciosService,
    private route: ActivatedRoute, private authService: AuthService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.selectedEquipoId = this.route.snapshot.paramMap.get('id');
    console.log(this.selectedEquipoId);
    this.espacioService.getEspacio(this.selectedEquipoId).subscribe(espacio => {
      this.selectedEquipo = espacio;
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
    this.reserva.img=this.selectedEquipo.image;
    this.reserva.id_user=this.user._id || '';
    this.reservaService.postReserva(this.reserva).subscribe(
      res => {
        this.router.navigate(['/espacios']);
      },
      err => {
        // hacer algo en caso de error
      }
    );
  }

}
