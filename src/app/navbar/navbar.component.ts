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
  constructor() { }

  ngOnInit() {
  }

}
