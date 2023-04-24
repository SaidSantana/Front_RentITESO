import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './layouts/tabs/tabs.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { EspaciosComponent } from './pages/espacios/espacios.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MaterialModule } from './modules/material/material.module';
import { HomeLoginComponent } from './pages/home-login/home-login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersService } from './shared/services/users.service';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    EquipoComponent,
    EspaciosComponent,
    HistoriaComponent,
    NotFoundComponent,
    RegistroComponent,
    HomeLoginComponent,
    ProfileComponent,
    RegisterUserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
