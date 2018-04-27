import { HttpOptions } from '../../shared/models/http-options/http-options';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AppConfig } from '../../config/app-config';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user/user';
import 'rxjs/add/operator/map';
import { JwtHelperService } from '@auth0/angular-jwt';

class LoginResponse {
    msg: string;
    token: string;
}

@Injectable()
export class AuthService {
    constructor(private appConfig: AppConfig, private http: HttpClient, private jwtService: JwtHelperService) { }

    register(user: User): Observable<Object> {
        return this.http.post(`${this.appConfig.apiUrl}users/register`, user);
    }

    login(user: User): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.appConfig.apiUrl}users/login`, user);
    }

    isAuthenticated(): boolean {
        const token = this.jwtService.tokenGetter();
        const decoded = this.jwtService.decodeToken(token);
        // console.log(token);
        // return !!token && !this.jwtService.isTokenExpired(token) && decoded.iss === this.appConfig.jwt_issuer;
        return !!token;
    }

    logout(): void {
        localStorage.removeItem('access_token');
    }

    getCurrentUser(): string {
        const token = this.jwtService.tokenGetter();
        const decoded = this.jwtService.decodeToken(token);
        // console.log(decoded);
        // return decoded.email;
        return 'abv.bg';
    }
}
