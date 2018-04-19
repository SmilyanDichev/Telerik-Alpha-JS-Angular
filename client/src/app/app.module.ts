
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; //TO DO reactive or regular forms
import { NgbModule } from '@ng-bootstrap/ng-bootstrap/';
// import { AuthModule } from '.'
// import { CoreModule } from '.'
// import { MatButtonModule, MatCardModule, MatSelectModule, MatForm,FieldModule, MatInputModule } from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex'
import { ClickOutsideModule } from 'ng-click-outside';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './home/app-routes.module';
import { AppConfig } from './config/app.config';
import { AppComponent } from './app.component';
import { JwtModule } from '@auth0/angular-jwt';


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
    ToastrModule.forRoot(),
    HttpClientModule,
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
