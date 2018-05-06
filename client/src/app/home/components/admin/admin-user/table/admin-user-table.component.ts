import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AuthService, UserService } from '../../../../../core/index';
import { User } from '../../../../../shared/models/user/user';

@Component({
  selector: 'admin-user-table',
  templateUrl: './admin-user-table.component.html',
  styleUrls: ['./admin-user-table.component.css'],
})
export class AdminUserTableComponent implements OnInit {

private usersData: object[];
private displayedColumns = ['id', 'email', 'CreatedAt', 'numOfAppl'];
private dataSource /*= new MatTableDataSource(USER_DATA)*/;
private currentUserEmail: string;

constructor(private authService: AuthService,
            private userService: UserService) { }

public ngOnInit(): void {
  this.currentUserEmail = this.authService.getCurrentUserEmail();
  this.getUsers();
  }

private getUsers(): void {
    this.userService.getUsers().subscribe(
      (res: User[]) => {
        const users = this.userService.userObjectConverter(res);
        this.dataSource = new MatTableDataSource(users);
        console.log('User data from userService received!', res);
      },
      (error: HttpErrorResponse) => {
          console.log('User data from userService FAILED!', error);
      });
  }

}

const USER_DATA = [
  { id: 1, email: 'gotin@sum.az' , createdAt: '12/02/1999', num: 21},
  { id: 1, email: 'gotin@sum.az' , createdAt: '12/02/1999', num: 21},
  { id: 1, email: 'gotin@sum.az' , createdAt: '12/02/1999', num: 21},
  { id: 1, email: 'gotin@sum.az' , createdAt: '12/02/1999', num: 21},
  { id: 1, email: 'gotin@sum.az' , createdAt: '12/02/1999', num: 21},
  { id: 1, email: 'gotin@sum.az' , createdAt: '12/02/1999', num: 21},
  { id: 1, email: 'gotin@sum.az' , createdAt: '12/02/1999', num: 21},
  { id: 1, email: 'gotin@sum.az' , createdAt: '12/02/1999', num: 21},
  { id: 1, email: 'gotin@sum.az' , createdAt: '12/02/1999', num: 21},
  { id: 1, email: 'gotin@sum.az' , createdAt: '12/02/1999', num: 21},
];
