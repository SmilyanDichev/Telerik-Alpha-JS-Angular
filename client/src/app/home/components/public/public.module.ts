import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { SharedModule} from '../../../shared/modules/shared/shared.module';


// import { JobDetailsComponent } from './job/job-details/job-details.component';
// import { JobListComponent } from './job/job-list/job-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { JobModule } from './job/job.module';
@NgModule({
    declarations:[
        ContactsComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        JobModule,
        SharedModule
    ],
    exports: [
        JobModule,
        ContactsComponent,
        HomeComponent,
    ]
})

export class PublicModule {}