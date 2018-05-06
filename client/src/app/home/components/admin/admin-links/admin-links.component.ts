import { Component, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { EventEmitter } from 'events';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../core/auth/auth.service';
import { JobService } from './../../../../core';
import { AddJobComponent } from './../../../../shared/modules/popups/add-job/add-job.component';

@Component({
  selector: 'app-admin-links',
  templateUrl: './admin-links.component.html',
  styleUrls: ['./admin-links.component.css'],
})
export class AdminLinksComponent implements OnInit {

  // constructor() { }

  public ngOnInit(): void {
    console.log('Admin Links Page Open!');
  }

}
