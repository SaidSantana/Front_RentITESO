import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormGroupDirective, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss']
})
export class HomeLoginComponent {

  formLogin: FormGroup;

  //Para la petición
  correo: string = '';
  password: string = '';

  constructor(formBuilder: FormBuilder, private router: Router){
    this.formLogin = formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(10)]],
    });
  }

  logIn(){
    this.router.navigate(['/equipo']);
    console.log(this.correo);
  }
  

} 
