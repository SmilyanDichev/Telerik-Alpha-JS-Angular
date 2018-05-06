import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AuthService, JobService } from '../../../../core';

@Component({
  selector: 'app-admin-aplications',
  templateUrl: './admin-aplications.component.html',
  styleUrls: ['./admin-aplications.component.css'],
})
export class AdminAplicationsComponent implements OnInit {
  private details: object = [];
  private userEmail: string;
  private displayedColumns = ['id', 'name', 'comment', 'email', 'createdAt', 'actions'];
  private dataSource = new MatTableDataSource(DATA);

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService,
    private jobService: JobService,
    ) {
   }

  public ngOnInit(): void {
    console.log('Applications for Job');
    this.getDetails();
  }
  // private downloadCV (): void {
  // }
  // private downloadLetter (): void {
  // }

  private getDetails(): void {
      // this.route.params
      // .subscribe((params) => {
      //   this.jobService.getJobDetails(params).subscribe((res) => {
      //     this.details = res;
      //   });
      // });
  }

  private isAuth(): boolean {
    return this.authService.isAuthenticated();
  }
}
const DATA = [
  {id: 1, firstName: 'Fire', lastName: 'Kingsman', email: 'gotin@sum.az', comment: 'I graduated telerik', createdAt: '12/12/2000'},
  {id: 1, firstName: 'Fire', lastName: 'Kingsman', email: 'gotin@sum.az', comment: 'I graduated telerik', createdAt: '12/12/2000'},
  {id: 1, firstName: 'Fire', lastName: 'Kingsman', email: 'gotin@sum.az', comment: 'I graduated telerik', createdAt: '12/12/2000'},
  {id: 1, firstName: 'Fire', lastName: 'Kingsman', email: 'gotin@sum.az', comment: 'I graduated telerik', createdAt: '12/12/2000'},
  {id: 1, firstName: 'Fire', lastName: 'Kingsman', email: 'gotin@sum.az', comment: 'I graduated telerik', createdAt: '12/12/2000'},
  {id: 1, firstName: 'Fire', lastName: 'Kingsman', email: 'gotin@sum.az', comment: 'I graduated telerik', createdAt: '12/12/2000'},
  {id: 1, firstName: 'Fire', lastName: 'Kingsman', email: 'gotin@sum.az', comment: 'I graduated telerik', createdAt: '12/12/2000'},
];
