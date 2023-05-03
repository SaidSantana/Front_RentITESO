import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/Interface/user';
import { LoginService } from 'src/app/shared/services/login.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  formRegister: FormGroup;
  confirmPassword: String = '';

  user: User = {
    nombre: '',
    apellido: '',
    password: '',
    email: '',
    rol: '',
    image: ''
  };

  constructor(private loginService: LoginService, formBuilder: FormBuilder, private router: Router
    ,private activatedRoute: ActivatedRoute){
    this.formRegister = formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  passwordMatch(){
    return this.user.password === this.confirmPassword;
  }


  registro(){
    if (this.formRegister.invalid){
      return;
    }
    this.loginService.registro(this.user).subscribe(res => {
      console.log(res);
      this.router.navigate(['/login']);
    })
  }
}
