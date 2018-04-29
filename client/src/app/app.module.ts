
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { PopupsModule } from './shared/modules/popups/popups.module';
import { AuthService } from './core/auth/auth.service';
import { DataService } from './core/data/data.service';
import { MapService } from './shared/services/map/map.service';
import { AgmCoreModule } from '@agm/core';

export function  tokenGetter() {
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
    AgmCoreModule.forRoot({
      // apiKey: AppConfig.googleMapsKey
      apiKey: 'AIzaSyCGJqupv-L7oKpsfN5pNmH6cWernso96vI',
    }),
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
              AuthService,
              DataService,
              MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
