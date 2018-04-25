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
  constructor() { }

  menuClick() {
    this.clickMenuEvent.emit(null);
  }
  loginClick() {
    this.clickLoginEvent.emit(null);
  }
  registerClick() {
    console.log('reg event');
    this.clickRegisterEvent.emit(null);
  }
  logoutClick() {
    console.log('out event');
    this.clickLogoutEvent.emit(null);
  }
  ngOnInit() {
  }
}
