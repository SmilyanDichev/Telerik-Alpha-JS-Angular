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
  private dataSource = new MatTableDataSource<any>();

  @ViewChild('paginator') private paginator: MatPaginator;

  constructor(private jobService: JobService) {
  }
  public ngOnInit(): void {
    this.getJobs();
    }

  private ngDoCheck(): void {
  }

  private getJobs(): void {
   this.jobService.getActiveJobs().subscribe((res: any[]) => {
        this.jobsData = res;
        this.dataSource = new MatTableDataSource(this.jobsData);
        setTimeout(() => this.dataSource.paginator = this.paginator);
        
        console.log(res);
    });
  }
}
