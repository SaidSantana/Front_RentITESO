import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { User } from '../Interface/user';
import { AuthService } from '../services/auth.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminsGuard implements CanActivate {
  token!: string;
  user!: User;
  constructor(private usersService: UsersService, private authService: AuthService, private router: Router){
    this.token = authService.getToken() as string;
    const decodedToken:any = jwtDecode(this.token); 
    this.usersService.getUser(decodedToken._id).subscribe((user: User) => {
      this.user = user;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.user.rol === 'Admin'){
      return true;
    }else{
      this.router.navigate(['/perfil']);
      return false;
    }
  }
  
}
