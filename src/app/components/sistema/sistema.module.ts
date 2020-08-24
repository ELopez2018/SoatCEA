import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SistemaRoutes } from './sistema.routing';

@NgModule({
  imports: [
    SistemaRoutes
  ],
  declarations: [
    SistemaComponent,
    DashboardComponent]
})
export class SistemaModule { }
