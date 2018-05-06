import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../../core/auth/auth.service';
import { JobService } from '../../../../../core/job/job.service';
import { RegisterOrLoginComponent } from '../../../../../shared/modules/popups/register-or-login/register-or-login.component';
import { ApplyJobComponent } from '../../../../../shared/modules/popups/apply-job/apply-job.component';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  private details: any = {};
  private userEmail: string;

  private loginOrRegisterComponentRef: MatDialogRef<RegisterOrLoginComponent>;
  private applyJobComponentRef: MatDialogRef<ApplyJobComponent>;

  // @Output()
  // private clickRegisterEvent = new EventEmitter();

  // @Output()
  // private clickLoginEvent = new EventEmitter();

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
      this.applyJobComponentRef = this.dialog.open(ApplyJobComponent);
      this.applyJobComponentRef
      .afterClosed()
      .subscribe( (res) => {
        //get data
      this.userEmail = this.authService.getCurrentUserEmail();
      this.jobService.applyJob( this.userEmail, this.route.snapshot.paramMap.get('id'), res).subscribe((res) => {
      this.toastr.success('Application Success');
      });


      });
     
    } else {
      this.loginOrRegisterComponentRef = this.dialog.open(RegisterOrLoginComponent);
      // this.loginOrRegisterComponentRef
      // .afterClosed()
      // .subscribe((res) => {
      //   if (res === 'login') {
      //     this.clickLoginEvent.emit(null);
      //   } else {
      //     this.clickRegisterEvent.emit(null);
      //   }
      // });
    }
  }
  private getDetails(): void {
      this.route.params
      .subscribe((params) => {
        this.jobService.getJobDetails(params.id).subscribe((res) => {
          this.details = res;
        });
      });
  }

  private isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

}
