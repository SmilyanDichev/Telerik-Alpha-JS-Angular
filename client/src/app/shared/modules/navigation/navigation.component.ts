import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../popups/login/login.component';
import { LoginService } from '../../../core/login/login.service';
import { RegisterService } from '../../../core/register/register.service';
import { RegisterComponent } from '../popups/register/register.component';



import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

  loginComponentRef: MatDialogRef<LoginComponent>;
  registerComponentRef: MatDialogRef<RegisterComponent>;

  constructor(private dialog: MatDialog,
    private register: RegisterService,
    private login: LoginService,
    public toastr: ToastrService) { }

  ngOnInit() {}
  sidebarToggle(sidebar) {
    sidebar.toggle();
  }
  loginModal() {
    console.log('login modal');
    this.loginComponentRef = this.dialog.open(LoginComponent);
    this.loginComponentRef
      .afterClosed()
      .subscribe((user) => {
        const isSuccess = this.login.login(user);
        console.log(isSuccess);
        if (isSuccess) {
           this.toastr.success(`Logging Success!`);
        } else {
           this.toastr.warning(`Logging Failure!`);
        }
      });
  }

  logoutModal() {
    this.toastr.success('logout navigation');
    console.log('logout navigation');
    // this.dialogComponentRef=this.dialog.open(DialogComponent);
    // this.dialogComponentRef
    // .afterClosed()
    // .subscribe(name=>console.log(name));
  }

  registerModal() {
    console.log('register modal');
    this.registerComponentRef = this.dialog.open(RegisterComponent);
    this.registerComponentRef
      .afterClosed()
      .subscribe(obj => console.log(obj));
  }
}


