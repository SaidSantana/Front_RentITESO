import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { 
    this.loginStatus.next(this.tokenExists());
  }

  setToken(token: string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  clearToken(){
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }

  tokenExists(): boolean{
    return this.getToken() ? true : false;
  }
}
