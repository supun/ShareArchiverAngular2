/*
 * @Author: Supun Dharmarathne 
 * @Date: 2017-04-03 16:23:41 
 * @Last Modified by:   Supun Dharmarathne 
 * @Last Modified time: 2017-04-03 16:23:41 
 */
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input()
  nav: any;
  constructor() { }

  ngOnInit() {
  }

  openNavBar(){
    if(this.nav.opened == false){
          this.nav.open();
    } else {
      this.nav.close();
    }
  }
}
