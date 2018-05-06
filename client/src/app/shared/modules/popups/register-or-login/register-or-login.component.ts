import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
// import { LoginComponent } from './../login/login.component';
// import { RegisterComponent } from './../register/register.component';

@Component({
  selector: 'app-register-or-login',
  templateUrl: './register-or-login.component.html',
  styleUrls: ['./register-or-login.component.css'],
})
export class RegisterOrLoginComponent implements OnInit {

  // public registerOrLoginComponentRef: MatDialogRef<RegisterOrLoginComponent>;

  constructor(private dialog: MatDialog) { }

  public ngOnInit(): void {
    console.log('RegOrLogin Modal opened!');
  }

  private openLoginModal(): void {
    console.log('Login Modal opened!');
    // this.dialog.open(LoginComponent);
  }
  private openRegModal(): void {
    console.log('Register Modal opened!');
    // this.dialog.open(RegisterComponent);
  }
}
