import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatFormField, MatTableDataSource } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { JobService } from '../../../../../core/job/job.service';

@Component({
  selector: 'admin-jobs-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

private jobsData: object[];
private displayedColumns = ['id', 'title', 'status', 'createdAt', 'view', 'edit', 'delete'];
private dataSource; // = new MatTableDataSource(JOB_DATA);

constructor(private jobService: JobService) {
  }

public ngOnInit(): void {
    this.getJobs();

    // get data DONE
    // visualise data DONE
    // update table
    // add, view, edit, delete job => update
  }

private getJobs(): void {
    this.jobService.getAllJobs().subscribe(
      (res: object[]) => {
        res.map((el) => {
          jobObjectConverter(el);
        });
        this.dataSource = new MatTableDataSource(res);
        console.log('Job data from jobService received!', res);
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
