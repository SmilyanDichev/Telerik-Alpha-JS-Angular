import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDetailsComponent } from './job-details/job-details.component';
import { JobListComponent } from './job-list/job-list.component';

@NgModule ({
    declarations: [
        JobDetailsComponent,
        JobListComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        JobDetailsComponent,
        JobListComponent,
    ]
})

export class JobModule {}
