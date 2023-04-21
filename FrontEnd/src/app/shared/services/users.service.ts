import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Interface/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser(userId: string): Observable<User>{
    const url = `http://localhost:4000/users/${userId}`;
    return this.http.get<User>(url);
  }

}
