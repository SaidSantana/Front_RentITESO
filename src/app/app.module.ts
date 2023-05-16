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

import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule} from '@abacritt/angularx-social-login';

import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { CreateEqComponent } from './pages/create_eq/create_eq.component';
import { CreateEsComponent } from './pages/create_es/create_es.component';
import { UpdateEqComponent } from './pages/update_eq/update_eq.component'
import { UpdateEsComponent } from './pages/update_es/update_es.component';
import { ChatSupportComponent } from './pages/chat-support/chat-support.component';
import { ReservarEqComponent } from './pages/reservar-eq/reservar-eq.component';
import { ReservarEsComponent } from './pages/reservar-es/reservar-es.component';

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
    UsersComponent,
    CreateEqComponent,
    CreateEsComponent,
    UpdateEqComponent,
    UpdateEsComponent,
    ChatSupportComponent,
    ReservarEqComponent,
    ReservarEsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '136831635040-2sn04l47jrar0hnu2pcd9agge7tghs6p.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
