import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { RegisterOrLoginComponent } from './register-or-login/register-or-login.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoginComponent,
    ApplyJobComponent,
    RegisterComponent,
    RegisterOrLoginComponent,
  ],
  exports:[
    LoginComponent,
    ApplyJobComponent,
    RegisterComponent,
    RegisterOrLoginComponent,
  ]
})
export class PopupsModule { }
