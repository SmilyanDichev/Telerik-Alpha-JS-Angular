import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatDialogModule, MatIconModule, MatInputModule, MatListModule,
  MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminGuard, AuthService, ContactService, JobService, LinkService } from '../../../core';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatNativeDateModule,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
  ],
  providers: [
    AuthService,
    JobService,
    LinkService,
    ContactService,
    AdminGuard,
  ],
})
export class SharedModule { }
