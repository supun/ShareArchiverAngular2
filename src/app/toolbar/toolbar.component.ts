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
