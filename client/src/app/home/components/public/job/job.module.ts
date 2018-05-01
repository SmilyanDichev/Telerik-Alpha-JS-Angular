import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';

import { JobDetailsComponent } from './job-details/job-details.component';
import { JobListComponent } from './job-list/job-list.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule ({
    declarations: [
        JobDetailsComponent,
        JobListComponent,
        ControlPanelComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
        FormsModule,
    ],
    exports: [
        CommonModule,
        JobDetailsComponent,
        JobListComponent,
        ControlPanelComponent,
    ]
})

export class JobModule {}
