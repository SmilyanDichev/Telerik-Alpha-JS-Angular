import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app-config';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class JobService {

  constructor(private appConfig: AppConfig, private http: HttpClient) {

  }

  public getUserJobHistory(): Observable<object> {
    // return  this.http
    // TO DO
  }
  public applyJob(): Observable<object> {
    // return  this.http
    // TO DO
  }

  public getActiveJobs(): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}/jobs/activejobs`);
  }

  public getAllJobs(): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}/jobs/alljobs`);
  }

  public getJobDetails(jobID): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}/jobs/:${jobID}`);
  }

  public editJob(job): Observable<object> {
    return this.http.post(`${this.appConfig.apiUrl}/jobs/edit`, job);
  }

  public createJob(job): Observable<object> {
    return this.http.post(`${this.appConfig.apiUrl}/jobs/create`, job);
  }



}
