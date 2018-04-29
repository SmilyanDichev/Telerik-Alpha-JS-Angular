import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddJobComponent } from './add-job/add-job.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { LoginComponent } from './login/login.component';
import { RegisterOrLoginComponent } from './register-or-login/register-or-login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    LoginComponent,
    ApplyJobComponent,
    RegisterComponent,
    RegisterOrLoginComponent,
    AddJobComponent,
    AddLinkComponent,
    AddContactComponent,
  ],
  exports: [
    LoginComponent,
    ApplyJobComponent,
    RegisterComponent,
    RegisterOrLoginComponent,
    AddJobComponent,
    AddLinkComponent,
    AddContactComponent,
  ],
})
export class PopupsModule { }
