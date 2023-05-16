import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontEnd';

  constructor(private router:Router){}

  //Method to check if im at the login route
  isNotLoginPage(): boolean{
    return (this.router.url !== '/login');
  }

  isNotRegisterPage(): boolean{
    return (this.router.url !== '/registro');
  }

  // isRouteValid(): boolean {
  //   const url = this.router.url;
  //   const isRouteValid = this.router.config.some(route => url.includes(route.path!));
  //   console.log(isRouteValid);
  //   return isRouteValid;
  // }
}
