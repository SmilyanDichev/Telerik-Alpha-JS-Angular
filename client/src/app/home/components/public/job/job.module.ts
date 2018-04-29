import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';

import { JobDetailsComponent } from './job-details/job-details.component';
import { JobListComponent } from './job-list/job-list.component';

@NgModule ({
    declarations: [
        JobDetailsComponent,
        JobListComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
    ],
    exports: [
        CommonModule,
        JobDetailsComponent,
        JobListComponent,
    ]
})

export class JobModule {}
