import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/shared/Interface/equipo';
import { EquiposService } from 'src/app/shared/services/equipos.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit{
  equipos: any[] = [];
  selectedEquipo: any;
  selectedEquipoId: any;

  show: any;

  usuario: number = 0; //temporal, implementar la verificacion con la info del usuario

  equipo: Equipo = {
    nombre: '',
    status: '',
    cantidad: 0,
    imagen: ''
  };

  constructor(private equiposService: EquiposService){ }

  ngOnInit(): void {
      this.equiposService.getEquipos().subscribe(equipos => {
        this.equipos = equipos;
        console.log(equipos);
      });
  }

  eliminarEquipo(equipoId: string){
    this.equiposService.deleteEquipos(equipoId).subscribe(() => {
      this.equipos = this.equipos.filter(equipo => equipo._id !== equipoId);
      location.reload();
    });
  }

  updateEquipo(equipo: any) {
    this.selectedEquipo = equipo;
    this.selectedEquipoId = equipo._id;
  }

  submitUpdate() {
    this.equiposService.putEquipo(this.selectedEquipoId, this.selectedEquipo).subscribe(() => {
      alert('Equipo actualizado exitosamente');
    });
  }

  closeForm(): void {
    this.selectedEquipoId = null;
    this.show = false;
  }

  crearEquipo() {
    this.equiposService.postEquipo(this.equipo).subscribe(
      res => {
        alert('Equipo creado exitosamente')
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
