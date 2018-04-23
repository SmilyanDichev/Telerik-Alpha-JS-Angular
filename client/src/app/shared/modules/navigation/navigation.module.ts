import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';

// import { MaterialModule } from '../material/material.module';
// import { an        } from '@angular/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    // MatIconModule,
  ],
  declarations: [
  SidebarComponent,
  ToolbarComponent,
  NavigationComponent,
  DialogComponent,
],
  exports:[
  NavigationComponent,
  // SidebarComponent,
  // ToolbarComponent,
],
entryComponents:
[
  DialogComponent,
]
})
export class NavigationModule { }
