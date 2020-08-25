import { Routes, RouterModule } from '@angular/router';
import { SistemaComponent } from './sistema.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormVehiculosComponent } from '../sistema/form-vehiculos/form-vehiculos.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';

const routes: Routes = [
  {path: '',
    component: SistemaComponent,
    children: [
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
      { path: 'principal', component: DashboardComponent },
      { path: 'vehiculos', component: FormVehiculosComponent },
      { path: 'cliente', component: FormClienteComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
];

export const SistemaRoutes = RouterModule.forChild(routes);
