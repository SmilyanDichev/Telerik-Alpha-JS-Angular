import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class SharedStatusService {

  @Output()
  public loginChange: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public registerChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  };

  public openLogin(): void {
    // this.loginDialogIsOpen = !this.loginDialogIsOpen;
    // this.loginChange.emit(this.loginDialogIsOpen);
    this.loginChange.emit(true);
  }

  public openRegister(): void {
    // this.registerDialogIsOpen = !this.registerDialogIsOpen;
    this.registerChange.emit(true);
  }

}
