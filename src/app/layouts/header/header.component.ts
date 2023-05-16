import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  loginStatus: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private socialAuthService: SocialAuthService,
    private loginService: LoginService
    ){
      this.authService.loginStatus.subscribe((status: boolean) => {
        this.loginStatus = status;
      })

      this.socialAuthService.authState.subscribe(user => {
        if(user){
          console.log('Usuario', user);
          //Validar token en el api
          this.loginService.googleLogin(user).subscribe({
            next: (response) => {
              this.authService.setToken(response.token);
              this.router.navigate(['/equipo'])
            },
            error: (error) => {
              console.log(error);
            }
          })
        }
      })
    }

    

    logOut(){
      this.authService.clearToken();
      this.router.navigate(['/login']);
    }

}
