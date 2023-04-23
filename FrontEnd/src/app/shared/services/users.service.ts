import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Interface/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  
  getUsers(): Observable<any>{
    const url = 'http://localhost:4000/users'
    return this.http.get<User>(url);
  }

  getUser(userId: string): Observable<User>{
    const url = `http://localhost:4000/users/${userId}`;
    return this.http.get<User>(url);
  }

  createUser(newUser: User){
    const url = 'http://localhost:4000/users';
    return this.http.post(url,newUser);
  }

  deleteUser(userId: string){
    const url = `http://localhost:4000/users/${userId}`;
    return this.http.delete(url);
  }

  updateUser(userId: string, user: User){
    const url = `http://localhost:4000/users/${userId}`;
    return this.http.put(url,user);
  }

}
