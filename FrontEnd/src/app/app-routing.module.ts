import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipoComponent } from './pages/equipo/equipo.component';
import { EspaciosComponent } from './pages/espacios/espacios.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeLoginComponent } from './pages/home-login/home-login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { UsersComponent } from './pages/users/users.component';
import { LoggedGuard } from './shared/guards/logged.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: HomeLoginComponent, canActivate: [LoggedGuard]},
  { path: 'equipo', component: EquipoComponent, canActivate: [AuthGuard]},
  { path: 'espacios', component: EspaciosComponent, canActivate: [AuthGuard] },
  { path: 'historia', component: HistoriaComponent, canActivate: [AuthGuard]},
  { path: 'perfil', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'registro', component: RegisterUserComponent, canActivate: [AuthGuard]},
  { path: 'usuarios', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'usuarios/editar/:id', component: RegisterUserComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard]} //Solución temporal
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
