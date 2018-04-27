import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user/user';
import { AuthService } from '../../core/auth/auth.service';
import { HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class LoginService {
  constructor(private auth: AuthService) {
   }
  login(user): boolean {
    this.auth.login(user, { observe: 'response', responseType: 'json' })
      .subscribe((res: HttpResponse<{ token: string }>) => {
        console.log(res.body);
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
