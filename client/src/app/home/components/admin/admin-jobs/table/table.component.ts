import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatFormField, MatTableDataSource } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { JobService } from '../../../../../core/job/job.service';
import { AuthService } from './../../../../../core/auth/auth.service';
import { AddJobComponent } from './../../../../../shared/modules/popups/add-job/add-job.component';
import { ConfirmComponent } from './../../../../../shared/modules/popups/confirm/confirm.component';
import { EditJobComponent } from './../../../../../shared/modules/popups/edit-job/edit-job.component';
import { JobObj } from '../../../../../shared/models/job/jobObj';

@Component({
  selector: 'admin-jobs-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

public addJobComponentRef: MatDialogRef<AddJobComponent>;
public editJobComponentRef: MatDialogRef<EditJobComponent>;
public confirmComponent: MatDialogRef<ConfirmComponent>;

private jobsData: object[];
private displayedColumns = ['id', 'title', 'status', 'createdAt', 'view', 'edit', 'delete'];
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

    // get data DONE
    // visualise data DONE
    // buttons that work
    // update table
    // add, view, edit, delete job => update
  }

public openJobDetails(jobId: number): void {

  }

public editJobModal(jobId: number): void {
  console.log('Edit-job Modal Opened!');
  this.editJobComponentRef = this.dialog.open(EditJobComponent);
  this.editJobComponentRef
    .afterClosed()
    .subscribe((jobObj) => {
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
  console.log('Confirm Modal Opened!');
  this.confirmComponent = this.dialog.open(ConfirmComponent);
}

private getJobs(): void {
  this.jobService.getAllJobs().subscribe(
    (res: JobObj[]) => {
      const convertedJobs = this.jobService.jobObjectConverter(res);
      this.dataSource = new MatTableDataSource(convertedJobs);
      console.log('Job data from jobService received!', convertedJobs, res);
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
