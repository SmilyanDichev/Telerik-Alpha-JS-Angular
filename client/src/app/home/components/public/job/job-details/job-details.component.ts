import { Component, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EventEmitter } from 'events';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../../../core/auth/auth.service';
import { LoginComponent } from './../../../../../shared/modules/popups/login/login.component';
import { RegisterOrLoginComponent } from './../../../../../shared/modules/popups/register-or-login/register-or-login.component';
import { RegisterComponent } from './../../../../../shared/modules/popups/register/register.component';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  public registerOrLoginComponentRef: MatDialogRef<RegisterOrLoginComponent>;

  constructor(private dialog: MatDialog) { }

  public ngOnInit(): void {
    console.log('Job Details Page Opened!');

  }

  public openLoginModal(): void {
    console.log('Login Modal opened!');
    this.dialog.open(LoginComponent);
  }
  public openRegModal(): void {
    console.log('Register Modal opened!');
    this.dialog.open(RegisterComponent);
  }
}
