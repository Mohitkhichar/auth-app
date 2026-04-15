import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
];