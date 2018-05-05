import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app-config';

@Injectable()
export class ContactService {

  constructor(private appConfig: AppConfig, private http: HttpClient) { }
    // Jobs
    // contacts
  public getContacts(): any {
      return  this.http.get(`${this.appConfig.apiUrl}contacts`);
    }

  public createContact(contact): any {
      return this.http.post(`${this.appConfig.apiUrl}contacts/add`, contact);
    }

  public editContact(contact): any {
      return this.http.post(`${this.appConfig.apiUrl}contacts/edit`, contact);
    }
}
