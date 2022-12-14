import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NotificationBellComponent } from './top-bar/notification-bell/notification-bell.component';
@NgModule({
  declarations: [SidenavComponent, TopBarComponent, NotificationBellComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SidenavComponent,
    TopBarComponent,
  ],
})
export class SharedModule {}
