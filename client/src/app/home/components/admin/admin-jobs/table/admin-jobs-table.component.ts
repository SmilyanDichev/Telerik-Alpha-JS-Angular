import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatFormField, MatTableDataSource } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { JobService } from '../../../../../core/job/job.service';
import { JobObj } from '../../../../../shared/models/job/jobObj';
import { AuthService } from './../../../../../core/auth/auth.service';
import { AddJobComponent } from './../../../../../shared/modules/popups/add-job/add-job.component';
import { ConfirmComponent } from './../../../../../shared/modules/popups/confirm/confirm.component';
import { EditJobComponent } from './../../../../../shared/modules/popups/edit-job/edit-job.component';

@Component({
  selector: 'admin-jobs-table',
  templateUrl: './admin-jobs-table.component.html',
  styleUrls: ['./admin-jobs-table.component.css'],
})
export class AdminJobsTableComponent implements OnInit {

public editJobComponentRef: MatDialogRef<EditJobComponent>;
public confirmComponentRef: MatDialogRef<ConfirmComponent>;

private jobsData: object[];
private displayedColumns = ['id', 'title', 'status', 'createdAt', 'actions'];
private dataSource;
private currentUserEmail: string;

constructor(private dialog: MatDialog,
            private authService: AuthService,
            public toastr: ToastrService,
            private jobService: JobService) {
  }

public ngOnInit(): void {
  this.currentUserEmail = this.authService.getCurrentUserEmail();
  this.getJobs();

    // get data (DONE)
    // visualise data (DONE)
    // buttons that work
    // update table
    // add, view, edit, delete job => update
  }

public editJobModal(jobId: number): void {
  console.log('Edit-job Modal Opened!');
  this.editJobComponentRef = this.dialog.open(EditJobComponent);
  this.editJobComponentRef
    .afterClosed()
    .subscribe((jobObj) => {
      const convertedJobs = this.jobService.jobObjectConverter(jobObj);
      console.log('Sending job edit to JobService!', jobObj);
      this.jobService.editJob(jobId, jobObj)
        .subscribe(
             (reply) => {
            console.log('Job Edit request succesful! ', reply);
            this.toastr.success(`${jobObj.title} updated!`, 'Success');
          }, (error) => {
            console.log('Sending updated job data to JobService failed!', error, jobObj);
             },
        );
    });
  }
public confirm(jobId: number): void {
  this.confirmComponentRef = this.dialog.open(ConfirmComponent);
  this.confirmComponentRef
  .afterClosed()
  .subscribe((permission) => {
    if (permission === true) {
    this.jobService.deleteJob(jobId).subscribe(
           (res) => {
          console.log('Job Deleted Succesfully!');
        }, (error) => {
          console.log('Deletion Request Failed', error);
        },
    );
  }

  });
}

private getJobs(): void {
  this.jobService.getAllJobs().subscribe(
    (res: JobObj[]) => {
      const convertedJobs = this.jobService.jobObjectConverter(res);
      this.dataSource = new MatTableDataSource(convertedJobs);
      console.log('Job data from jobService received!', convertedJobs);
    },
    (error: HttpErrorResponse) => {
        console.log('Job data from jobService FAILED!', error);
    });
}

}

export interface IJob {
  id: number;
  title: string;
  createdAt: string;
}
