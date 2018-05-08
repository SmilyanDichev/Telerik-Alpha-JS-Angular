import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FilterService } from '../../../../../core/filter/filter.service';
import { JobService } from '../../../../../core/job/job.service';
// import { filter } from 'rxjs/operators';

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

  constructor(private jobService: JobService, private filterService: FilterService) {
  }
  public ngOnInit(): void {
    this.setJobsTable();
    }

  private ngDoCheck(): void {
  }

  private applyFilter(filterValues: string[]): void {
    console.log(filterValues);
    this.jobsData = this.filterService.tableData(this.jobsData, filterValues);
    this.dataSource = new MatTableDataSource(this.jobsData);
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  private resetFilter(): void {
    console.log('reset filter');
    this.setJobsTable();
  }

  private setJobsTable(): void {
   this.jobService.getActiveJobs().subscribe((res: any[]) => {
        this.jobsData = res;
        this.dataSource = new MatTableDataSource(this.jobsData);
        setTimeout(() => this.dataSource.paginator = this.paginator);
        // console.log(res);
    });
  }
}
