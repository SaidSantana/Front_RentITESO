import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EquiposService } from 'src/app/shared/services/equipos.service';

@Component({
  selector: 'app-update',
  templateUrl: './update_eq.component.html',
  styleUrls: ['./update_eq.component.scss']
})
export class UpdateEqComponent implements OnInit{

  selectedEquipo: any;
  selectedEquipoId: any;

  constructor(private equiposService: EquiposService, private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
      this.selectedEquipoId = this.route.snapshot.paramMap.get('id');
      console.log(this.selectedEquipoId);
      this.equiposService.getEquipo(this.selectedEquipoId).subscribe(equipo => {
        this.selectedEquipo = equipo;
      });
  }

  submitUpdate() {
    console.log(this.selectedEquipo);
    console.log(this.selectedEquipo);
    this.equiposService.putEquipo(this.selectedEquipoId, this.selectedEquipo).subscribe(() => {
      this.router.navigate(['/equipo']);
    });
  }
}
