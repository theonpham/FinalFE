import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    data: {
      pageTitle: 'Dashboard',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      pageTitle: 'Đăng nhập',
    },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      pageTitle: 'Dashboard',
    },
  },
];
