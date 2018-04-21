import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
  ],
  declarations: [
  SidebarComponent,
  ToolbarComponent
],
  exports:[
  SidebarComponent,
  ToolbarComponent,
]
})
export class NavigationModule { }
