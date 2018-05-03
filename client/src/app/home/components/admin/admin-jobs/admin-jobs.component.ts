import { Component, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EventEmitter } from 'events';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../core/auth/auth.service';
import { JobService } from './../../../../core';
import { AddJobComponent } from './../../../../shared/modules/popups/add-job/add-job.component';
// import { ConfirmComponent } from './../../../../shared/modules/popups/confirm/confirm.component';
// import { EditJobComponent } from './../../../../shared/modules/popups/edit-job/edit-job.component';
@Component({
  selector: 'app-admin-jobs',
  templateUrl: './admin-jobs.component.html',
  styleUrls: ['./admin-jobs.component.css'],
})
export class AdminJobsComponent implements OnInit {

  public addJobComponentRef: MatDialogRef<AddJobComponent>;
  // public editJobComponentRef: MatDialogRef<EditJobComponent>;
  // public confirmComponent: MatDialogRef<ConfirmComponent>;

  private currentUserEmail: string;

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              public toastr: ToastrService,
              private jobService: JobService) {}

  public ngOnInit(): void {
                console.log('Admin Jobs Page Opened!');
                this.currentUserEmail = this.authService.getCurrentUserEmail();
  }

  public addJobModal(): void {
    console.log('Add-job Modal Opened!');
    this.addJobComponentRef = this.dialog.open(AddJobComponent);
    this.addJobComponentRef
      .afterClosed()
      .subscribe((jobObj) => {
        console.log('Sending new job data to JobService!', jobObj);
        this.jobService.createJob(jobObj)
          .subscribe(
           (reply) => {
          console.log('Client post succesful => Job Details: ', reply);
          this.toastr.success(`${jobObj.title} added!`, 'Success');
        }, (error) => {
          console.log('Sending data to JobService failed! ', error, jobObj);

          this.toastr.error('New Job Failed!', 'Error');
      });
      },

                 (error) => {
        this.toastr.error('New Job Failed!', 'Error');
      });
  }

  // public editJobModal(jobId: number): void {
  //   console.log('Edit-job Modal Opened!');
  //   this.editJobComponentRef = this.dialog.open(EditJobComponent);
  //   this.editJobComponentRef
  //     .afterClosed()
  //     .subscribe((jobObj) => {
  //       console.log('Sending job edit to JobService!', jobObj);
  //       this.jobService.editJob(jobId, jobObj)
  //         .subscribe(
  //              (reply) => {
  //             console.log('Job Edit request succesful! ', reply);
  //             this.toastr.success(`${jobObj.title} updated!`, 'Success');
  //           }, (error) => {
  //             console.log('Sending updated job data to JobService failed!', error, jobObj);
  //              },
  //         );
  //     });
  // }
  // public confirm(): void {
  //   console.log('Confirm Modal Opened!');
  //   this.confirmComponent = this.dialog.open(ConfirmComponent);
  // }
}
