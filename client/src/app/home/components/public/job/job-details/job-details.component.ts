import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) {
      this.route.params
      .subscribe( params => console.log(params));
   }
   
  ngOnInit() {
  }
}
