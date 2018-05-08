import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,
    ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef,
    MatFormField, MatFormFieldModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JobService } from './../../../core';
import { AddJobComponent } from './../../../shared/modules/popups/add-job/add-job.component';
import { ConfirmComponent } from './../../../shared/modules/popups/confirm/confirm.component';
import { EditContactComponent } from './../../../shared/modules/popups/edit-contact/edit-contact.component';
import { EditJobComponent } from './../../../shared/modules/popups/edit-job/edit-job.component';
import { EditLinkComponent } from './../../../shared/modules/popups/edit-link/edit-link.component';
import { PopupsModule } from './../../../shared/modules/popups/popups.module';
import { SharedModule } from './../../../shared/modules/shared/shared.module';
import { AdminAplicationsComponent } from './admin-aplications/admin-aplications.component';
import { AdminContactsComponent } from './admin-contacts/admin-contacts.component';
import { AdminContactsTableComponent } from './admin-contacts/table/admin-contacts-table.component';
import { AdminJobsComponent } from './admin-jobs/admin-jobs.component';
import { AdminJobsTableComponent } from './admin-jobs/table/admin-jobs-table.component';
import { AdminLinksComponent } from './admin-links/admin-links.component';
import { AdminLinksTableComponent } from './admin-links/table/admin-links-table.component';
import { AdminUsersComponent } from './admin-user/admin-users.component';
import { AdminUserTableComponent } from './admin-user/table/admin-user-table.component';

@NgModule({
    declarations: [
        AdminAplicationsComponent,
        AdminContactsComponent,
        AdminJobsComponent,
        AdminLinksComponent,
        AdminUsersComponent,
        AdminJobsTableComponent,
        AdminUserTableComponent,
        AdminContactsTableComponent,
        AdminLinksTableComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        PopupsModule,
        MatTableModule,
        MatRadioModule,
        SharedModule,
    ],
    exports: [
        AdminAplicationsComponent,
        AdminContactsComponent,
        AdminJobsComponent,
        AdminLinksComponent,
        AdminUsersComponent,
        MatFormField,
        MatTableModule,
        MatRadioModule,
        MatButtonModule,
        SharedModule,
        PopupsModule,
    ],
    entryComponents: [
        AddJobComponent,
        EditJobComponent,
        ConfirmComponent,
        EditContactComponent,
        EditLinkComponent,
    ],
})

export class AdminModule { }
