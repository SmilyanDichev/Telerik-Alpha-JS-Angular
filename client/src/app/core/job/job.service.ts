import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../config/app-config';
import { JobObj } from '../../shared/models/job/jobObj';

@Injectable()
export class JobService {

  constructor(private appConfig: AppConfig, private http: HttpClient) {

  }

  public deleteJob(jobId: number): Observable<object> {
    console.log('Response acquired! sending request! ', jobId);
    return this.http.post(`${this.appConfig.apiUrl}jobs/delete`, { jobId });
  }

  public applyJob(userEmail: any, userId: string, jobId: string, data: any): Observable<object> {
    console.log('apply job data:', data);
    console.log('apply job userID:', userId);
    const files = new FormData();
    files.append('cv', data.CV, `${jobId}_jobID_${userEmail}_CV`);
    files.append('letter', data.Letter, `${jobId}_jobID_${userEmail}_letter`);
    files.append('comment', data.comment);
    files.append('cvUrl', `${jobId}_jobID_${userEmail}_CV`);
    files.append('letterUrl', `${jobId}_jobID_${userEmail}_letter`);
    files.append('jobId', jobId);
    files.append('userId', userId);

    // return this.http.post(`${this.appConfig.apiUrl}jobs/apply/${id}`, userEmail);
    return this.http.post(`${this.appConfig.apiUrl}jobs/apply/upload`, files);
  }

  public getActiveJobs(): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}jobs/active`);
  }

  public getAllJobs(): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}jobs/all`);
  }

  public getJobDetails(jobID: number): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}jobs/${jobID}`);
  }
  public getJobApplications(jobID: number): Observable<object> { //  Observable<object>
  const res =  this.http.get(`${this.appConfig.apiUrl}jobs/applications/${jobID}`);
  console.log(jobID, res, `${this.appConfig.apiUrl}jobs/applications/${jobID}`);
  return res;
  }

  public editJob(jobId: number, jobObj: Job): Observable<object> {
    return this.http.post(`${this.appConfig.apiUrl}jobs/edit`, jobObj);
  }

  public createJob(job: Job): Observable<object> {
    return this.http.post(`${this.appConfig.apiUrl}jobs/create`, job);
  }

  public  jobObjectConverter(job: JobObj[]): JobObj[] {

    job.map((el) => {
      const i = el.createdAt;

      const yearIndex0: number = 0;
      const yearIndex1: number = 1;
      const yearIndex2: number = 2;
      const yearIndex3: number = 3;

      const monthIndex0: number = 5;
      const monthIndex1: number = 6;

      const dayIndex0: number = 8;
      const dayIndex1: number = 9;

      const date =
      `${i[dayIndex0]}${i[dayIndex1]}/${i[monthIndex0]}${i[monthIndex1]}/${i[yearIndex0]}${i[yearIndex1]}${i[yearIndex2]}${i[yearIndex3]}`;
      el.createdAt = date;

      if (el.isActive) {
          el.isActive = 'Active';
      } else {
          el.isActive = 'Inactive';
      }
      });

    return job;
}

  public  fixDateApp(job: JobObj[]): JobObj[] {

  job.map((el) => {
    const i = el.createdAt;
    const yearIndex0: number = 0;
    const yearIndex1: number = 1;
    const yearIndex2: number = 2;
    const yearIndex3: number = 3;

    const monthIndex0: number = 5;
    const monthIndex1: number = 6;

    const dayIndex0: number = 8;
    const dayIndex1: number = 9;

    const date =
    `${i[dayIndex0]}${i[dayIndex1]}/${i[monthIndex0]}${i[monthIndex1]}/${i[yearIndex0]}${i[yearIndex1]}${i[yearIndex2]}${i[yearIndex3]}`;
    el.createdAt = date;

    });
  return job;
}

}
