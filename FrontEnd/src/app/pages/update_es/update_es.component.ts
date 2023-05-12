import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EspaciosService } from 'src/app/shared/services/espacios.service';

@Component({
  selector: 'app-update',
  templateUrl: './update_es.component.html',
  styleUrls: ['./update_es.component.scss']
})
export class UpdateEsComponent implements OnInit{

  selectedEspacio: any;
  selectedEspacioId: any;

  constructor(private espaciosService: EspaciosService, private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
      this.selectedEspacioId = this.route.snapshot.paramMap.get('id');
      console.log(this.selectedEspacioId);
      this.espaciosService.getEspacio(this.selectedEspacioId).subscribe(espacio => {
        this.selectedEspacio = espacio;
      });
  }

  submitUpdate() {
    console.log(this.selectedEspacio);
    console.log(this.selectedEspacio);
    this.espaciosService.putEspacio(this.selectedEspacioId, this.selectedEspacio).subscribe(() => {
      this.router.navigate(['/espacios']);
    });
  }
}
