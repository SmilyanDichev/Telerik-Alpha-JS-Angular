import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  @Output()
  private clickYesEvent = new EventEmitter();
  @Output()
  private clickNoEvent = new EventEmitter();

  constructor(private dialogRef: MatDialogRef <ConfirmComponent>) { }
  public ngOnInit(): void {
    console.log('Confirm Modal Opened!');
        }

  private yesClick(): void {
    console.log('Confirm Yes Button Clicked!');
    this.clickYesEvent.emit(true);
  }

  private noClick(): void {
    console.log('Confirm No Button Clicked!');
    this.clickNoEvent.emit(null);
  }
  private submit(): void {
    console.log('Confirm button clicked!');
    const permission = true;
    this.dialogRef.close(permission);
  }
}
