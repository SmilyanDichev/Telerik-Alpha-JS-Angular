
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; //TO DO reactive or regular forms
import { NgbModule } from '@ng-bootstrap/ng-bootstrap/';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { NavigationModule } from './shared/modules/navigation/navigation.module';
import { SharedModule } from './shared/modules/shared/shared.module';
import { AppRoutingModule } from './home/app-routes.module';
import { AdminModule } from './home/components/admin/admin.module';
import { PublicModule } from './home/components/public/public.module';
import { JobModule } from './home/components/public/job/job.module';
import { AppConfig } from './config/app-config';
import { AppComponent } from './app.component';
// import { LoginComponent } from './shared/modules/popups/login/login.component';
// import { RegisterComponent } from './shared/modules/popups/register/register.component';
// import { ApplyJobComponent } from './shared/modules/popups/apply-job/apply-job.component';
// import { RegisterOrLoginComponent } from './shared/modules/popups/register-or-login/register-or-login.component';
import { PopupsModule } from './shared/modules/popups/popups.module';
import { AuthService } from './core/auth/auth.service';
export function  tokenGetter(){
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    JobModule,
    AdminModule,
    PublicModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NavigationModule,
    SharedModule,
    NgbModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8000'],
        blacklistedRoutes: []
      }
    }),
    PopupsModule,
  ],
  providers: [AppConfig,
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
