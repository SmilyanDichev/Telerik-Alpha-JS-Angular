import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAplicationsComponent } from './admin-aplications/admin-aplications.component';
import { AdminContactsComponent } from './admin-contacts/admin-contacts.component';
import { AdminJobsComponent } from './admin-jobs/admin-jobs.component';
import { AdminLinksComponent } from './admin-links/admin-links.component';
import { AdminUsersComponent } from './admin-user/admin-users.component';

@NgModule({
    declarations:[
        AdminAplicationsComponent,
        AdminContactsComponent,
        AdminJobsComponent,
        AdminLinksComponent,
        AdminUsersComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        AdminAplicationsComponent,
        AdminContactsComponent,
        AdminJobsComponent,
        AdminLinksComponent,
        AdminUsersComponent,
    ]
})

export class AdminModule { }