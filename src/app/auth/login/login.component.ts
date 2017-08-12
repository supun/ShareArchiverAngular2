import { Router } from '@angular/router';
import { AuthUser } from './../../shared/domain/model/auth-user';
import { LoginDetails } from './../../shared/domain/model/login-details';
import { AuthenticationService } from './../../shared/service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authUser : AuthUser;
  constructor(private authenticationService :AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.isLoggedIn().subscribe(
      (state)=>{
        if(state){
           this.router.navigate([`configuration/agent-list`]);
        }
      }
    );
     
    
  }

  login(){
    let userData = {"password":"admin","token":"string","username":"sharearchiver_su"}
    
    this.authenticationService.authenticateUser(LoginDetails.fromJson(userData)).subscribe(
      (response) =>{
       this.authUser = AuthUser.fromJson(response);
       localStorage.setItem('token', this.authUser.token);
       this.authenticationService.isLoginSubject.next(true);
        alert("login successfull");
        //this.authUser = AuthUser.fromJson(response.json()); 
      },
      (err) =>{

      }
    );
  }
}
