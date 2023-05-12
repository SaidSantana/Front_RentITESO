import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private espaciosService: EspaciosService,private router: Router){ }

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

  updateEspacio(id: number) {
    this.router.navigate(['/actualizar_es', id]);
  }
}
