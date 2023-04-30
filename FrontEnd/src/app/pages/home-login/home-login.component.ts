import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormGroupDirective, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Credenciales } from 'src/app/shared/Interface/credenciales';
import { Token } from 'src/app/shared/Interface/token';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';


@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss']
})
export class HomeLoginComponent {

  formLogin: FormGroup;

  //Para la petición
  credenciales: Credenciales = {
    correo: '',
    password: ''
  }


  constructor(formBuilder: FormBuilder
    , private router: Router
    , private loginService: LoginService
    , private authService: AuthService){
    this.formLogin = formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(10)]],
    });
  }

  logIn(){
    if (this.formLogin.invalid){
      return;
    }
    this.loginService.logIn(this.credenciales).subscribe((response: Token) => {
      this.authService.setToken(response.token);
      this.router.navigate(['/equipo']);
    })
  }
  

} 
