import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';

// Le module sert de référence pour la structure demander par le PDF
// Les composants sont now standalone, donc importables directement
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
