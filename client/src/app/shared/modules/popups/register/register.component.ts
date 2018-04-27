import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rForm: FormGroup;
  email: string;
  password: string;
  fistName: string;
  lastName: string;

  constructor( private fomBuilder: FormBuilder,
    private dialogRef: MatDialogRef <RegisterComponent>) { }

  ngOnInit() {
    this.dialogRef.disableClose = true;
    this.rForm = this.fomBuilder.group({
      email: [null, Validators.compose(
        [Validators.required, Validators.email, Validators.maxLength(1024)])],
      password: [null, Validators.compose(
        [Validators.minLength(3), Validators.maxLength(256)])],
      firstName: [null],
      lastName: [null],
    });
  }
  submit(rForm) {
    this.dialogRef.close(rForm.value);
  }
}
