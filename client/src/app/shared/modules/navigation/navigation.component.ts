import { Component, DoCheck, OnInit } from '@angular/core';
import { resolveDefinition } from '@angular/core/src/view/util';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/auth/auth.service';
import { User } from '../../models/user/user';
import { LoginComponent } from '../popups/login/login.component';
import { RegisterComponent } from '../popups/register/register.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent  implement  DoCheck {

  private loginComponentRef: MatDialogRef<LoginComponent>;
  private registerComponentRef: MatDialogRef<RegisterComponent>;
  private currentUserEmail: string;
  // private isAdmin: boolean;

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private toastr: ToastrService) { }

  // public ngOnInit(): void {
  // }

  public ngDoCheck(): void {
    this.currentUserEmail = this.authService.getCurrentUserEmail();
  }

  private isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

  private isAdmin(): boolean {
    return this.authService.getAdminStatus();
  }

  private sidebarToggle(sidebar: any): void {
    sidebar.toggle();
  }

  private logoutModal(): void {
    this.toastr.success('logout navigation');
    localStorage.removeItem('access_token');
    console.log('logout navigation');
  }

  private loginModal(): void {
    console.log('login modal');
    this.loginComponentRef = this.dialog.open(LoginComponent);
    this.loginComponentRef
      .afterClosed()
      .subscribe((user) => {
        console.log('login dialog input data ', user);
        this.authService.login(user).subscribe((res) => {
            localStorage.setItem('access_token', res.token);
            this.toastr.success(`${user.email} logged in!`, 'Success');
            console.log(res);
          },                                   ((err) => {
            this.toastr.error(`Wrong username or password`, 'Error');
            console.log(err);
          }));
      });
  }

  private registerModal(): void {
    console.log('register modal');
    this.registerComponentRef = this.dialog.open(RegisterComponent);
    this.registerComponentRef
      .afterClosed()
      .subscribe((user) => {
        // console.log('register dialog input data ', user);
        this.authService.register(user).subscribe(
          (res) => {
            console.log(res);
       }, (err) => {
            console.log(err);
          },
        );
      });
  }
}
