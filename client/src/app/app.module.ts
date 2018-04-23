
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
    })
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
