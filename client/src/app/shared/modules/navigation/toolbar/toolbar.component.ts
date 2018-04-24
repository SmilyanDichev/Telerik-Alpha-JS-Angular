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
    this.clickMenuEvent.emit(null)
  }
  loginClick(){

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
