import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../config/app-config';
import { User } from '../../shared/models/user/user';
@Injectable()
export class UserService {

  constructor(private appConfig: AppConfig, private http: HttpClient) { }

    // links
  public getUsers(): Observable<object> {
    return  this.http.get(`${this.appConfig.apiUrl}users/get-all`);
    }
  public  userObjectConverter(user: User[]): User[] {
      user.map((el) => {
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

      return user;
  }
}
