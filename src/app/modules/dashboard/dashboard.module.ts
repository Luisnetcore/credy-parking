import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
