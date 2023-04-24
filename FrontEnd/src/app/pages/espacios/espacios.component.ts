import { Component, OnInit } from '@angular/core';

import { Espacio } from 'src/app/shared/Interface/espacio';
import { EspaciosService } from 'src/app/shared/services/espacios.service';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.scss']
})
export class EspaciosComponent implements OnInit{
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

    constructor(private espaciosService: EspaciosService){ }

  ngOnInit(): void {
      this.espaciosService.getEspacios().subscribe(espacios => {
        this.espacios = espacios;
        console.log(espacios);
      });
  }

  eliminarEspacio(espacioId: string){
    this.espaciosService.deleteEspacios(espacioId).subscribe(() => {
      this.espacios = this.espacios.filter(espacio => espacio._id !== espacioId);
      location.reload();
    });
  }

  updateEspacio(espacio: any) {
    this.selectedEspacio = espacio;
    this.selectedEspacioId = espacio._id;
  }

  submitUpdate() {
    this.espaciosService.putEspacio(this.selectedEspacioId, this.selectedEspacio).subscribe(() => {
      alert('Espacio actualizado exitosamente.');
    });
  }

  closeForm(): void {
    this.selectedEspacioId = null;
    this.show = false;
  }

  crearEspacio() {
    this.espaciosService.postEspacio(this.espacio).subscribe(
      res => {
        alert('Espacio creado exitosamente')
      },
      err => {
        // hacer algo en caso de error
      }
    );
  }

  showForm() {
    this.show = true;
  }

}
