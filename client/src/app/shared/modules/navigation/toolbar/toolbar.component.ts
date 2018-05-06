import { Component, OnInit , Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  @Input()
  private isAuth: boolean;

  @Input()
  private isAdmin: boolean;

  @Input()
  private currentUserEmail: string;

  @Output()
  private clickMenuEvent = new EventEmitter();

  @Output()
  private clickLoginEvent = new EventEmitter();

  @Output()
  private clickRegisterEvent = new EventEmitter();

  @Output()
  private clickLogoutEvent = new EventEmitter();

  constructor() {
   }

  private menuClick(): void {
    this.clickMenuEvent.emit(null);
  }

  private loginClick(): void {
    this.clickLoginEvent.emit(null);
  }

  private registerClick(): void {
    this.clickRegisterEvent.emit(null);
  }

  private logoutClick(): void {
    this.clickLogoutEvent.emit(null);
  }

  public ngOnInit(): void {
  }
}
