import { JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    //let jwtHelper: JwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');

    if (token) {
     // if (!jwtHelper.isTokenExpired(token)) {
        return true;  // TODO: Make this check to ensure we have a JWT, and that it's not expired yet
     // }
    } else {
      // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
    }

    
   
  }
}
