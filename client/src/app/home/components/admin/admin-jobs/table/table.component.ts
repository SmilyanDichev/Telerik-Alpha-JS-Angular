import { Component, OnInit } from '@angular/core';
import { MatFormField, MatTableDataSource } from '@angular/material';
import { JobService } from '../../../../../core/job/job.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'admin-jobs-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  private jobsData: object[];
  private displayedColumns = ['id', 'title', 'createdAt', 'view', 'edit', 'delete'];
  private dataSource = new MatTableDataSource(this.jobsData);

  constructor(private jobService: JobService) {
  }

  public ngOnInit(): void {
    this.getJobs();
    // get data
    // visualise data
    // update table
    // view, edit, delete job => update
  }

  private getJobs(): void {
    this.jobService.getAllJobs().subscribe(
      (res: object[]) => {
      this.jobsData = res;
      console.log('Job data from jobService received!', res);
      },
      (error: HttpErrorResponse) => {
          console.log(error.status);
      });
  }
}

export interface IJob {
  id: number;
  title: string;
  createdAt: string;
}

const JOB_DATA: IJob[] = [
  { id: 1, title: 'Graduate Big Boy', createdAt: '11/10/2016' },
  { id: 2, title: 'Junior Big Boy', createdAt: '11/10/2016' },
  { id: 3, title: 'Big Boy', createdAt: '11/10/2016' },
  { id: 4, title: 'Senior Big Boy', createdAt: '11/10/2016' },
  { id: 5, title: 'Master Big Boy', createdAt: '11/10/2016' },
  { id: 10, title: '"The" Big Boy', createdAt: '11/10/2016' },
];
