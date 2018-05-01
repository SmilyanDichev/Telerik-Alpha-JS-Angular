import { AuthService } from '../../../core/auth/auth.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { LoginComponent } from '../popups/login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RegisterComponent } from '../popups/register/register.component';
import { resolveDefinition } from '@angular/core/src/view/util';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user/user';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, DoCheck {

  private loginComponentRef: MatDialogRef<LoginComponent>;
  private registerComponentRef: MatDialogRef<RegisterComponent>;
  private currentUserEmail: string;
  private isAdmin: boolean;

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.currentUserEmail = this.authService.getCurrentUser();
    this.isAdmin = this.authService.getAdminStatus();
  }

  public ngDoCheck(): void {
    this.currentUserEmail = this.authService.getCurrentUser();
  }
  private isAuth(): boolean {
    return this.authService.isAuthenticated();
  }
  private sidebarToggle(sidebar): void {
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
          },(err => {
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
