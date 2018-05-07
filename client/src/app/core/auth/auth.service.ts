import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../config/app-config';
import { LoginResponse } from '../../shared/models/login-response/login-response';
import { User } from '../../shared/models/user/user';
// import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    constructor(private appConfig: AppConfig, private http: HttpClient, private jwtService: JwtHelperService) { }

    public register(user: User): Observable<object> {
        return this.http.post(`${this.appConfig.apiUrl}users/register`, user);
    }

    public login(user: User): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.appConfig.apiUrl}users/login`, user);
    }

    public isAuthenticated(): boolean {
        const token = this.jwtService.tokenGetter();
        const decoded = this.jwtService.decodeToken(token);
        // console.log(token);
        return !!token && !this.jwtService.isTokenExpired(token) && decoded.iss === this.appConfig.jwt_issuer;
        // return !!token;
    }

    public logout(): void {
        localStorage.removeItem('access_token');
    }

    public getCurrentUserEmail(): string {
        const token = this.jwtService.tokenGetter();
        const decoded = this.jwtService.decodeToken(token);
        // console.log(decoded);
        return decoded !== null ? decoded.email : 'empty';
    }

    public getCurrentUserId(): string {
        const token = this.jwtService.tokenGetter();
        const decoded = this.jwtService.decodeToken(token);
        return decoded !== null ? decoded.id : 'empty';
    }

    public getAdminStatus(): boolean {
        const token = this.jwtService.tokenGetter();
        const decoded = this.jwtService.decodeToken(token);
        // console.log('is an admin', decoded);
        return decoded !== null ? decoded.isAdmin : false;
        // return true;
    }
}
