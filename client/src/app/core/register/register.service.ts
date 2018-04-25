import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user/user';
import { AuthService } from '../../core/auth/auth.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private auth: AuthService, private user: User) {

  }
  register(): boolean {
    this.auth.register(this.user, { observe: 'response', responseType: 'json' })
      .subscribe((res: HttpResponse<{ token: string }>) => {
        localStorage.setItem('access_token', res.body.token);
        return true;
      },
        (err: HttpErrorResponse) => {
          if (err.status) {
            return false;
          }
        });
    return false;
  }
}
