import { Component, OnInit , Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})


export class ToolbarComponent implements OnInit {

  @Output() clickMenuEvent = new EventEmitter();
  @Output() clickLoginEvent = new EventEmitter();
  @Output() clickRegisterEvent = new EventEmitter();
  @Output() clickLogoutEvent = new EventEmitter();
  constructor() { 
  }

 

  
  
  menuClick(){
    console.log("menu");
    this.clickMenuEvent.emit(null)
  }
  loginClick(){
    console.log("in");
    this.clickLoginEvent.emit(null)
  }
  registerClick(){
    console.log("reg");
    this.clickRegisterEvent.emit(null)
  }
  logoutClick(){;
    console.log("out");
    this.clickLogoutEvent.emit(null)
  }

  ngOnInit() {
  }

}
