import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { SharedModule } from '../../../shared/modules/shared/shared.module';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { JobModule } from './job/job.module';

@NgModule({
    declarations: [
        ContactsComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        JobModule,
        AgmCoreModule,
        SharedModule,
        NgxTwitterTimelineModule,
    ],
    exports: [
        JobModule,
        ContactsComponent,
        HomeComponent,
        NgxTwitterTimelineModule,
    ],
    providers: [
        GoogleMapsAPIWrapper,
    ],
})

export class PublicModule {}
