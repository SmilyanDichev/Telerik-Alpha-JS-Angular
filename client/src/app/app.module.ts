<<<<<<< HEAD
// import { AuthModule } from '.'
=======

import { HttpClientModule } from '@angular/common/http'
>>>>>>> 2705b11c7bb745ac57282c6193523667988ff905
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; //TO DO reactive or regular forms
import { NgbModule } from '@ng-bootstrap/ng-bootstrap/';
import { MatIconModule } from '@angular/material';
// import { MatButtonModule, MatCardModule, MatSelectModule, MatForm,FieldModule, MatInputModule } from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex
// import { AuthModule } from '.'
// import { CoreModule } from '.'
import { ClickOutsideModule } from 'ng-click-outside';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';

import { NavigationModule } from './shared/components/navigation/navigation.module';
//components
import { ToolbarComponent} from './shared/components/navigation/toolbar/toolbar.component';

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
    BrowserModule,
    JobModule,
    AdminModule,
    PublicModule,
    MatIconModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NavigationModule,
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
