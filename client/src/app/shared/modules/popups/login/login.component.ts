import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  private rForm: FormGroup;
  private email: string;
  private password: string;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef <LoginComponent>) {
  }

  public ngOnInit(): void {
    this.dialogRef.disableClose = true;
    this.rForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password : [null, Validators.compose([Validators.minLength(3), Validators.maxLength(100)])],
    });
  }

  public submit(rForm): void {
    this.dialogRef.close(rForm.value);
  }
}
