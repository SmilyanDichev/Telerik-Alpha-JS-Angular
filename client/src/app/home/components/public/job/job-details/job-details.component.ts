import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../../core/auth/auth.service';
import { JobService } from '../../../../../core/job/job.service';
import { RegisterOrLoginComponent } from '../../../../../shared/modules/popups/register-or-login/register-or-login.component';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  private details: object = [];
  private userEmail: string;


  private loginOrRegisterComponentRef: MatDialogRef<RegisterOrLoginComponent>;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService,
    private jobService: JobService,
    private toastr: ToastrService) {
   }

  public ngOnInit(): void {
    this.getDetails();
  }
  private applyJob (): void {
    if (this.isAuth()) {
      this.userEmail = this.authService.getCurrentUserEmail();
      this.jobService.applyJob( this.userEmail, this.details.id).subscribe((res) => {
      this.toastr.success('Application Success');
      });
    } else {
      this.loginOrRegisterComponentRef = this.dialog.open(RegisterOrLoginComponent);
      // this.loginOrRegisterComponentRef
      // .afterClosed()
      // .subscribe((res)=> {

      // })
      console.log('login!');
    }
  }
  private getDetails(): void {
      this.route.params
      .subscribe((params) => {
        this.jobService.getJobDetails(params).subscribe((res) => {
          this.details = res;
        });
      });
  }

  private isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

}
