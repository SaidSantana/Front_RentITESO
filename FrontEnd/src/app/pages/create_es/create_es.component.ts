import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Espacio } from 'src/app/shared/Interface/espacio';
import { EspaciosService } from 'src/app/shared/services/espacios.service';

@Component({
  selector: 'app-create',
  templateUrl: './create_es.component.html',
  styleUrls: ['./create_es.component.scss']
})
export class CreateEsComponent {

  espacio: Espacio = {
    nombre: '',
    status: '',
    stock: 0,
    image: ''
  };

  constructor(private espaciosService: EspaciosService, private router: Router) {}

  crearEspacio() {
    this.espaciosService.postEspacio(this.espacio).subscribe(
      res => {
        this.router.navigate(['/espacio']);
      },
      err => {
        // hacer algo en caso de error
      }
    );
  }
}
