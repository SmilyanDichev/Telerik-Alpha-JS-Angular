import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app-config';

@Injectable()

export class JobService {

  constructor(private appConfig: AppConfig, private http: HttpClient) { }
    // Jobs

    public applyJob() {
    // return  this.http
      // TO DO
    }

  getActiveJobs() {
      return  this.http.get(`${this.appConfig.apiUrl}jobs/activejobs`);
    }

  getAllJobs() {
      return  this.http.get(`${this.appConfig.apiUrl}jobs/alljobs`);
    }

  getJobDetails(jobID) {
      return this.http.get(`${this.appConfig.apiUrl}jobs/:${jobID}`);
    }

  editJob(job) {
      return this.http.post(`${this.appConfig.apiUrl}jobs/edit`, job);
    }
  createJob(job) {
      return this.http.post(`${this.appConfig.apiUrl}jobs/create`, job);
    }

  }
