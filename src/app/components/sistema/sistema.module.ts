import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SistemaRoutes } from './sistema.routing';
import { FormVehiculosComponent } from './form-vehiculos/form-vehiculos.component'
import { PrimengConponentsModule } from '../../shared/components/primeng-conponents.module';
import { FormClienteComponent } from './form-cliente/form-cliente.component';

@NgModule({
  imports: [
    SistemaRoutes,
    PrimengConponentsModule
  ],
  declarations: [
    SistemaComponent,
    DashboardComponent,
    FormVehiculosComponent,
    FormClienteComponent
  ]
})
export class SistemaModule { }
