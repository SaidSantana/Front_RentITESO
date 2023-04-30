import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciales } from '../Interface/credenciales';
import { Token } from '../Interface/token';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logIn(credenciales: Credenciales): Observable<Token>{
    return this.http.post<Token>(environment.apiUrl + '/login', credenciales);
  }
}
