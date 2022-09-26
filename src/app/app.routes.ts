import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
    data: {
      pageTitle: 'Đăng nhập',
    },
  },
  { path: '**', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      pageTitle: 'Đăng nhập',
    },
  },
];
