import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app-config';

@Injectable()
export class LinkService {

  constructor(private appConfig: AppConfig, private http: HttpClient) { }

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
