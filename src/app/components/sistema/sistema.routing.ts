import { Routes, RouterModule } from '@angular/router';
import { SistemaComponent } from './sistema.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '',
    component: SistemaComponent,
    children: [
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
      { path: 'principal', component: DashboardComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
];

export const SistemaRoutes = RouterModule.forChild(routes);
