import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipoComponent } from './pages/equipo/equipo.component';
import { EspaciosComponent } from './pages/espacios/espacios.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeLoginComponent } from './pages/home-login/home-login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: HomeLoginComponent},
  { path: 'equipo', component: EquipoComponent},
  { path: 'espacios', component: EspaciosComponent},
  { path: 'historia', component: HistoriaComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'perfil', component: ProfileComponent},
  { path: '**', component: NotFoundComponent}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
