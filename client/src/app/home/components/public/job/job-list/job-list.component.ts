import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { JobService } from '../../../../../core/job/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  private jobsData: any[];
  private displayedColumns = ['title', 'actions'];
  private dataSource = new MatTableDataSource(this.jobsData);

  @ViewChild(MatPaginator) private paginator: MatPaginator;

  constructor(private jobService: JobService) {
  }

  public ngOnInit(): void {
  this.getJobs();
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public ngDoCheck(): void {
  this.dataSource = new MatTableDataSource(this.jobsData);
  }

  private getJobs(): void {
   this.jobService.getActiveJobs().subscribe((res: any[]) => {
        this.jobsData = res;
        console.log(res);
    });
  }

}
