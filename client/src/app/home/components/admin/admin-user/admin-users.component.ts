import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin.user',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent implements OnInit {

  // constructor() { }

  public ngOnInit(): void {
    console.log('Admin Users Page Opened!');
  }

}
