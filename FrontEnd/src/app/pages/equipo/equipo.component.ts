import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  usuario: number = 0; //temporal, implementar la verificacion con la info del usuario

  equipo: Equipo = {
    nombre: '',
    status: '',
    cantidad: 0,
    imagen: ''
  };

  constructor(private equiposService: EquiposService, private router: Router){ }

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

  updateEquipo(id: number) {
    this.router.navigate(['/actualizar_eq', id]);
  }


}
