import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../../../../core/job/job.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  private details: object = [];

  constructor(
    private route: ActivatedRoute,
    private jobSurvice: JobService) {

   }
  public ngOnInit(): void {
    this.getDetails();
  }
  private getDetails(): void {
    this.route.params
      .subscribe((params) => {
        // console.log(params);
        this.jobSurvice.getJobDetails(params.id).subscribe((res) => {
          this.details = res;
          // console.log(this.details);
        });
      });
  }

}
