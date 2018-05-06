import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApplyJobComponent } from '../../../../shared/modules/popups/apply-job/apply-job.component';
import { RegisterOrLoginComponent } from '../../../../shared/modules/popups/register-or-login/register-or-login.component';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobListComponent } from './job-list/job-list.component';

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
    ],
    entryComponents: [
        RegisterOrLoginComponent,
        ApplyJobComponent,
    ],
})

export class JobModule {}
