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
import { AuthGuard } from './shared/guards/auth.guard';7
import { CreateEqComponent } from './pages/create_eq/create_eq.component';
import { CreateEsComponent } from './pages/create_es/create_es.component';
import { UpdateEqComponent } from './pages/update_eq/update_eq.component';
import { UpdateEsComponent } from './pages/update_es/update_es.component';
import { ChatSupportComponent } from './pages/chat-support/chat-support.component';
import { AdminsGuard } from './shared/guards/admins.guard';
import { ReservarEqComponent } from './pages/reservar-eq/reservar-eq.component';
import { ReservarEsComponent } from './pages/reservar-es/reservar-es.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: HomeLoginComponent, canActivate: [LoggedGuard]},
  { path: 'registro', component: RegistroComponent, canActivate: [LoggedGuard] },
  { path: 'equipo', component: EquipoComponent, canActivate: [AuthGuard]},
  { path: 'reservar-eq/:id', component: ReservarEqComponent,  canActivate: [AuthGuard]},
  { path: 'reservar-es/:id', component: ReservarEsComponent,  canActivate: [AuthGuard]},
  { path: 'crear_eq', component: CreateEqComponent,  canActivate: [AuthGuard]},
  { path: 'crear_es', component: CreateEsComponent,  canActivate: [AuthGuard]},
  { path: 'soporte', component: ChatSupportComponent, canActivate: [AuthGuard] },
  { path: 'actualizar_eq/:id', component: UpdateEqComponent, canActivate: [AuthGuard] },
  { path: 'actualizar_es/:id', component: UpdateEsComponent, canActivate: [AuthGuard] },
  { path: 'espacios', component: EspaciosComponent, canActivate: [AuthGuard] },
  { path: 'reservas', component: HistoriaComponent, canActivate: [AuthGuard]},
  { path: 'perfil', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'usuarios/registro', component: RegisterUserComponent, canActivate: [AuthGuard,AdminsGuard]},
  { path: 'usuarios', component: UsersComponent, canActivate: [AuthGuard,AdminsGuard]},
  { path: 'usuarios/editar/:id', component: RegisterUserComponent, canActivate: [AuthGuard,AdminsGuard]},
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard]} //Solución temporal
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
