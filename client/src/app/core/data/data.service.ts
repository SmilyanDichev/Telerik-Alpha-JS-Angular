import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private appConfig: AppConfig, private http: HttpClient) { }


    // contacts
  public getContacts(): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}/contacts`);
  }

  public createContact(contact): Observable<object> {
    return this.http.post(`${this.appConfig.apiUrl}/contacts/add`, contact);
  }

  public editContact(contact): Observable<object> {
    return this.http.post(`${this.appConfig.apiUrl}/contacts/edit`, contact);
  }

  // links
  public getLinks(): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}/links`);
  }
  public createLink(link): Observable<object> {
    return this.http.post(`${this.appConfig.apiUrl}/links/add`, link);
  }

  public editLink(link): Observable<object> {
    return this.http.post(`${this.appConfig.apiUrl}/links/edit`, link);
  }

}

