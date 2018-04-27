import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user/user';
import { AuthService } from '../../core/auth/auth.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private auth: AuthService) {
  }

  login(user): any {
    this.auth.login(user, { observe: 'response', responseType: 'json' })
      .subscribe((res: HttpResponse<{ token: string }>) => {
        localStorage.setItem('access_token', res.body.token);
        // console.log('true');
        return true;
      },
        (err: HttpErrorResponse) => {
          if (err.status) {
            console.log('er status');
            return false;
          }
        });
    // console.log('final response');
    // return result;
  }
}
