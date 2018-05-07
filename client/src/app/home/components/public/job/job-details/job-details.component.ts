import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../../core/auth/auth.service';
import { JobService } from '../../../../../core/job/job.service';
import { SharedStatusService } from '../../../../../core/shared-status/shared-status.service';
import { ApplyJobComponent } from '../../../../../shared/modules/popups/apply-job/apply-job.component';
import { RegisterOrLoginComponent } from '../../../../../shared/modules/popups/register-or-login/register-or-login.component';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  private details: any = {};
  private userEmail: string;
  private userId: string;

  private loginOrRegisterComponentRef: MatDialogRef<RegisterOrLoginComponent>;
  private applyJobComponentRef: MatDialogRef<ApplyJobComponent>;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService,
    private jobService: JobService,
    private toastr: ToastrService,
    private sharedStatusService: SharedStatusService) {
   }

  public ngOnInit(): void {
    // this.getDetails();
  }
  private applyJob (): void {
    if (this.isAuth()) {
      this.applyJobComponentRef = this.dialog.open(ApplyJobComponent);
      this.applyJobComponentRef
      .afterClosed()
      .subscribe( (res) => {
      if (res) {
        this.userEmail = this.authService.getCurrentUserEmail();
        this.userId = this.authService.getCurrentUserId();
        this.jobService.applyJob( this.userEmail, this.userId, this.route.snapshot.paramMap.get('id'), res).subscribe((status) => {
          this.toastr.success('Application Success');
          });
      }
      });
    } else {
      this.loginOrRegisterComponentRef = this.dialog.open(RegisterOrLoginComponent);
      this.loginOrRegisterComponentRef
      .afterClosed()
      .subscribe((res) => {
        if (res === 'login') {
          this.sharedStatusService.openLogin();
        }
        if (res === 'register') {
          this.sharedStatusService.openRegister();
        }
      });
    }
  }

  private isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

}
