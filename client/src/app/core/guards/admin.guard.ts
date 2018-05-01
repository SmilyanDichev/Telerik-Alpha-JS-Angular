import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthService){}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.getAdminStatus();
    }
}
