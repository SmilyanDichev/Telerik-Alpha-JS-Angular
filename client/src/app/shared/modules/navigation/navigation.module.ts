import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../popups/login/login.component';
import { PopupsModule } from '../popups/popups.module';
import { RegisterComponent } from '../popups/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { DialogComponent } from './dialog/dialog.component';
import { NavigationComponent } from './navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

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
  exports: [
    NavigationComponent,
  ],
  entryComponents:
    [
      LoginComponent,
      RegisterComponent,
    ],
  providers: [
  ],
})
export class NavigationModule { }
