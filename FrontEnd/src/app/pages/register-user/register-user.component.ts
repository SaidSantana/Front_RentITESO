import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/Interface/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit{

  formRegister: FormGroup;
  user: User = {
    nombre: '',
    apellido: '',
    password: '',
    email: '',
    rol: '',
    image: ''
  };

  edit: boolean = false;

  constructor(private userService: UsersService, formBuilder: FormBuilder, private router: Router
    ,private activatedRoute: ActivatedRoute){
    this.formRegister = formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      rol: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
      const params = this.activatedRoute.snapshot.params;
      if (params){
        this.userService.getUser(params['id']).subscribe(user => {
          this.user = user;
          this.edit = true;
        });
      }
  }

  //Método para crear un usuario en la DB usando el servicio
  createUser(){
    this.userService.createUser(this.user).subscribe(res => {
      //console.log(res);
      this.router.navigate(['/usuarios']);
    });
  }
  
  editUser(){
    this.userService.updateUser(this.activatedRoute.snapshot.params['id'],this.user).subscribe(res => {
      console.log(res);
      this.router.navigate(['/usuarios']);
    })
  }

}
