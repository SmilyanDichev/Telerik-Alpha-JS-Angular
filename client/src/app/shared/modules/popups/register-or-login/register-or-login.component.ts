import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register-or-login',
  templateUrl: './register-or-login.component.html',
  styleUrls: ['./register-or-login.component.css'],
})
export class RegisterOrLoginComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  public ngOnInit(): void {
    console.log('RegOrLogin Modal opened!');
  }

  private openLoginModal(): void {
    console.log('Login Modal opened!');

  }
  private openRegModal(): void {
    console.log('Register Modal opened!');

  }
}
