import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardComponent,
    ProfileCardComponent,
    StatusBadgeComponent
  ],
  exports: [
    DashboardComponent,
    ProfileCardComponent,
    StatusBadgeComponent
  ]
})
export class DashboardModule { }
