import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,
    ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef,
    MatFormField, MatFormFieldModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JobService } from './../../../core';
import { AddJobComponent } from './../../../shared/modules/popups/add-job/add-job.component';
import { ConfirmComponent } from './../../../shared/modules/popups/confirm/confirm.component';
import { EditJobComponent } from './../../../shared/modules/popups/edit-job/edit-job.component';
import { PopupsModule } from './../../../shared/modules/popups/popups.module';
import { AdminAplicationsComponent } from './admin-aplications/admin-aplications.component';
import { AdminContactsComponent } from './admin-contacts/admin-contacts.component';
import { AdminJobsComponent } from './admin-jobs/admin-jobs.component';
import { AdminLinksComponent } from './admin-links/admin-links.component';
import { AdminUsersComponent } from './admin-user/admin-users.component';
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
        EditJobComponent,
        ConfirmComponent,
    ],
})

export class AdminModule { }
