import { Component, OnInit , Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})


export class ToolbarComponent implements OnInit {

  @Input()
  isAuth: boolean;

  @Input()
  isAdmin: boolean;

  @Input()
  currentUserEmail: string;

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

    console.log(this.isAuth);
  }
}
