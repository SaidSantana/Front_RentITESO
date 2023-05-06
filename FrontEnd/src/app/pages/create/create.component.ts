import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/shared/Interface/equipo';
import { EquiposService } from 'src/app/shared/services/equipos.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  equipo: Equipo = {
    nombre: '',
    status: '',
    cantidad: 0,
    imagen: ''
  };

  constructor(private equiposService: EquiposService, private router: Router) {}

  crearEquipo() {
    this.equiposService.postEquipo(this.equipo).subscribe(
      res => {
        this.router.navigate(['/equipo']);
      },
      err => {
        // hacer algo en caso de error
      }
    );
  }
}
