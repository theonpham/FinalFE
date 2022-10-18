import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { StaffComponent } from './staff/staff.component';
import { BillComponent } from './bill/bill.component';
import { FoodComponent } from './food/food.component';
import { FoodTypeComponent } from './food-type/food-type.component';
import { ClientComponent } from './client/client.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
    data: {
      pageTitle: 'Đăng nhập',
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
  {
    path: 'table',
    component: TableComponent,
    data: {
      pageTitle: 'Bàn ăn',
    },
  },
  {
    path: 'staff',
    component: StaffComponent,
    data: {
      pageTitle: 'Nhân viên',
    },
  },
  {
    path: 'bill',
    component: BillComponent,
    data: {
      pageTitle: 'Hóa đơn',
    },
  },
  {
    path: 'food',
    component: FoodComponent,
    data: {
      pageTitle: 'Món ăn',
    },
  },
  {
    path: 'food-type',
    component: FoodTypeComponent,
    data: {
      pageTitle: 'Thể loại',
    },
  },
  {
    path: 'client',
    component: ClientComponent,
    data: {
      pageTitle: 'Khách hàng thân thiết',
    },
  },
  { path: '**', redirectTo: '/login' },
];
