import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAplicationsComponent } from './admin-aplications/admin-aplications.component';
import { AdminContactsComponent } from './admin-contacts/admin-contacts.component';
import { AdminJobsComponent } from './admin-jobs/admin-jobs.component';
import { AdminLinksComponent } from './admin-links/admin-links.component';
import { AdminUsersComponent } from './admin-user/admin-users.component';
import { AddJobComponent } from './admin-jobs/add-job/add-job.component';

import { BrowserModule } from '@angular/platform-browser';

import { FormBuilder, FormGroup, Validators,
    FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatFormField } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import {MatDialogModule} from '@angular/material';

@NgModule({
    declarations: [
        AdminAplicationsComponent,
        AdminContactsComponent,
        AdminJobsComponent,
        AdminLinksComponent,
        AdminUsersComponent,
        AddJobComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
    ],
    exports: [
        AdminAplicationsComponent,
        AdminContactsComponent,
        AdminJobsComponent,
        AdminLinksComponent,
        AdminUsersComponent,
        AddJobComponent,
        MatFormField,
    ]
})

export class AdminModule { }