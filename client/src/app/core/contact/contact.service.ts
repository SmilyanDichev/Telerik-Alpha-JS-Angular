import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app-config';

@Injectable()
export class ContactService {

  constructor(private appConfig: AppConfig, private http: HttpClient) { }
    // Jobs
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
}
