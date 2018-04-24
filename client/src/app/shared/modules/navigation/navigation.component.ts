import { Component,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from '../popups/login/login.component';
import { RegisterComponent } from '../popups/register/register.component';
// import { RegisterOrLoginComponent } from '../popups/register-or-login/register-or-login.component';
// import { ApplyJobComponent } from '../popups/apply-job/apply-job.component';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

  dialogComponentRef: MatDialogRef<DialogComponent>;
  loginComponentRef: MatDialogRef<LoginComponent>;
  registerComponentRef: MatDialogRef<RegisterComponent>;
  // registerOrLoginComponentRef: MatDialogRef<RegisterOrLoginComponent>;
  // applyJobComponentRef: MatDialogRef<ApplyJobComponent>;

  

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  sidebarToggle(sidebar){
    sidebar.toggle();
  }

  loginModal() {
    console.log('login modal');
     this.loginComponentRef = this.dialog.open(LoginComponent)
     this.loginComponentRef
    .afterClosed()
    .subscribe(obj=>console.log(obj));

  }

  logoutModal() {
    console.log('logout navigation');
    // this.dialogComponentRef=this.dialog.open(DialogComponent);
    // this.dialogComponentRef
    // .afterClosed()
    // .subscribe(name=>console.log(name));
  }

  registerModal() {
    console.log('register modal');
     this.registerComponentRef= this.dialog.open(RegisterComponent)
     this.registerComponentRef
    .afterClosed()
    .subscribe(obj=>console.log(obj));

  }
  

}
