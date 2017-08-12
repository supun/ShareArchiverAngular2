import { AuthUser } from './../domain/model/auth-user';
import { LoginDetails } from './../domain/model/login-details';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { environment } from "environments/environment";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class AuthenticationService {
  private authUrl : string = environment.API+'login/login/authuser';

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http:Http) { 

  }

/**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }

  /**
*
* @returns {Observable<T>}
*/
   isLoggedIn() : Observable<boolean> {
   return this.isLoginSubject.asObservable();
   }
  authenticateUser(loginData:LoginDetails):Observable<AuthUser> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this.http.post(this.authUrl, JSON.stringify(loginData), options).map((response) => response.json() as AuthUser)
 
  }
}
