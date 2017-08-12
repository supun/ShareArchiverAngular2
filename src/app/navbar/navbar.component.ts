import { AuthenticationService } from './../shared/service/authentication.service';
import { Observable } from 'rxjs/Observable';
/*
 * @Author: Supun Dharmarathne 
 * @Date: 2017-04-03 16:26:15 
 * @Last Modified by:   Supun Dharmarathne 
 * @Last Modified time: 2017-04-03 16:26:15 
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  systemBtn = {show:false};
  configBtn = {show:false};
  userBtn = {show:false};
  systemConfigBtn = {show:false};
  isLoggedIn : boolean;

  constructor(private authenticationService:AuthenticationService) {
   // this.isLoggedIn = authenticationService.isLoggedIn();
   }

  ngOnInit() {
    this.authenticationService.isLoggedIn().subscribe(
      (state)=>{
        if(state){
          this.isLoggedIn = true;
           //this.router.navigate([`configuration/agent-list`]);
        }
      }
    );
  }

}
