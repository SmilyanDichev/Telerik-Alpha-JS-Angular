import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatSelectModule,  MatInputModule,  MatSidenavModule, MatListModule  } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
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
  ],
  declarations: [],
  exports:[
    CommonModule,
    MatButtonModule,
    MatCardModule, 
    MatSelectModule, 
    MatInputModule, 
    MatIconModule,
    MatListModule, 
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ]
})
export class SharedModule { }
