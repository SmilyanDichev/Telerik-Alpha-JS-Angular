import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,
    ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef,
    MatFormField, MatFormFieldModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PopupsModule } from './../../../shared/modules/popups/popups.module';
import { AdminAplicationsComponent } from './admin-aplications/admin-aplications.component';
import { AdminContactsComponent } from './admin-contacts/admin-contacts.component';
import { AdminJobsComponent } from './admin-jobs/admin-jobs.component';
import { AdminLinksComponent } from './admin-links/admin-links.component';
import { AdminUsersComponent } from './admin-user/admin-users.component';
import { AddJobComponent } from './admin-jobs/add-job/add-job.component';

@NgModule({
    declarations: [
        AdminAplicationsComponent,
        AdminContactsComponent,
        AdminJobsComponent,
        AdminLinksComponent,
        AdminUsersComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        PopupsModule,
    ],
    exports: [
        AdminAplicationsComponent,
        AdminContactsComponent,
        AdminJobsComponent,
        AdminLinksComponent,
        AdminUsersComponent,
        MatFormField,
    ],
    entryComponents: [
        AddJobComponent,
    ],
})

export class AdminModule { }
