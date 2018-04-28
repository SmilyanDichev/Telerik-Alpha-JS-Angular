import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app-config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private appConfig: AppConfig, private http: HttpClient) { }
    // Jobs

    getUserJobHistory() {
      // return  this.http
      // TO DO
    }
    applyJob() {
    // return  this.http
      // TO DO
    }

    getActiveJobs() {
      return  this.http.get(`${this.appConfig.apiUrl}/jobs/activejobs`);
    }

    getAllJobs() {
      return  this.http.get(`${this.appConfig.apiUrl}/jobs/alljobs`);
    }

    getJobDetails(jobID) {
      return this.http.get(`${this.appConfig.apiUrl}/jobs/:${jobID}`);
    }

    editJob(job) {
      return this.http.post(`${this.appConfig.apiUrl}/jobs/edit`, job);
    }


    // contacts
    getContacts() {
      return  this.http.get(`${this.appConfig.apiUrl}/contacts`);
    }

    createContact(contact) {
      return this.http.post(`${this.appConfig.apiUrl}/contacts/add`, contact);
    }

    editContact(contact) {
      return this.http.post(`${this.appConfig.apiUrl}/contacts/edit`, contact);
    }

    // links
    getLinks() {
      return  this.http.get(`${this.appConfig.apiUrl}/links`);
    }
    createLink(link) {
      return this.http.post(`${this.appConfig.apiUrl}/links/add`, link);
    }

    editLink(link) {
      return this.http.post(`${this.appConfig.apiUrl}/links/edit`, link);
    }

  }


