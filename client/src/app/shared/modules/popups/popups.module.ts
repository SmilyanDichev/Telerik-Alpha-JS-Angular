import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { RegisterOrLoginComponent } from './register-or-login/register-or-login.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    ApplyJobComponent,
    RegisterComponent,
    RegisterOrLoginComponent,
  ],
  exports: [
    LoginComponent,
    ApplyJobComponent,
    RegisterComponent,
    RegisterOrLoginComponent,
  ]
})
export class PopupsModule { }
