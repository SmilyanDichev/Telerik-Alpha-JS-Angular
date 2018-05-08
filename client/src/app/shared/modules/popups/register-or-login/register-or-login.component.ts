import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register-or-login',
  templateUrl: './register-or-login.component.html',
  styleUrls: ['./register-or-login.component.css'],
})
export class RegisterOrLoginComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<RegisterOrLoginComponent>) { }

  public ngOnInit(): void {
    this.dialogRef.disableClose = true;
  }

  public submit(action: string): void {
    this.dialogRef.close(action);
  }
}
