import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() clickCloseEvent = new EventEmitter();
  @Output() clickLoginEvent = new EventEmitter();
  @Output() clickRegisterEvent = new EventEmitter();
  @Output() clickLogoutEvent = new EventEmitter();
  constructor() { }

  closeClick(){
    console.log("close");
    this.clickCloseEvent.emit(null);
  }

  loginClick(){
    console.log("in");
    this.clickLoginEvent.emit(null);
  }

  registerClick(){
    this.clickRegisterEvent.emit(null);
  }

  logoutClick(){
    console.log("out");
    this.clickLogoutEvent.emit(null);
  }




  ngOnInit() {
  }

}
