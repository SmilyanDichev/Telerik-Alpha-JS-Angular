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
  private userEmail: string;
  private displayedColumns = ['name', 'comment', 'email', 'createdAt', 'actions'];
  private dataSource;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService,
    private jobService: JobService,
    ) {
   }

  public ngOnInit(): void {
    console.log('Applications for Job');
    this.getApps();
  }
  // private downloadCV (): void {
  // }
  // private downloadLetter (): void {
  // }

  private getApps(): void {

  //   this.sub = this.route.params.subscribe((params) => {
  //   this.id = +params['id']; // (+) converts string 'id' to a number
  //   console.log('this is the sub ', this.sub);
  //  });
      console.log('getting response!');
      this.route.params
      .subscribe((id: any) => {
        this.jobService.getJobApplications(id.id).subscribe((res: any) => {
          console.log('<><><<><<>><><Response acquired ', res);
          const fixedDateApps = this.jobService.fixDateApp(res);
          this.dataSource  = new MatTableDataSource(fixedDateApps);
        });
      });
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
