import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../config/app-config';

@Injectable()
export class JobService {

  constructor(private appConfig: AppConfig, private http: HttpClient) {

  }

  // public getUserJobHistory(): Observable<object> {
  //   // return  this.http
  //   // TO DO
  // }
  // public applyJob(): Observable<object> {
  //   // return  this.http
  //   // TO DO
  // }

  public getActiveJobs(): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}/jobs/activejobs`);
  }

  public getAllJobs(): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}/jobs/alljobs`);
  }

  public getJobDetails(jobID: number): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}/jobs/:${jobID}`);
  }

  public editJob(job: Job): Observable<object> {
    return this.http.post(`${this.appConfig.apiUrl}/jobs/edit`, job);
  }

  public createJob(job: Job): Observable<object> {
    return this.http.post(`${this.appConfig.apiUrl}/jobs/create`, job);
  }

}
