import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatIconModule, MatToolbarModule,
          MatButtonModule, MatCardModule, MatSelectModule,
          MatInputModule,  MatSidenavModule, MatListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { AuthService, JobService, LinkService, ContactService, AdminGuard } from '../../../core';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    JobService,
    LinkService,
    ContactService,
    AdminGuard,
  ]
})
export class SharedModule { }
