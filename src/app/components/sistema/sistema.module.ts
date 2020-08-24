import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SistemaRoutes } from './sistema.routing';
import { FormVehiculosComponent } from './form-vehiculos/form-vehiculos.component'

@NgModule({
  imports: [
    SistemaRoutes
  ],
  declarations: [
    SistemaComponent,
    DashboardComponent,
    FormVehiculosComponent
  ]
})
export class SistemaModule { }
