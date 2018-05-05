import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../config/app-config';
import { HttpResponse } from '../../shared/models/http-response/http-response';

@Injectable()
export class CategorieService {

  constructor(private appConfig: AppConfig, private http: HttpClient) {

   }

  public getAllCategories(): any {
    return this.http.get(`${this.appConfig.apiUrl}categories`);
   }

}
