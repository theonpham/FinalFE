import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { StaffComponent } from './staff/staff.component';
import { BillComponent } from './bill/bill.component';
import { FoodComponent } from './food/food.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
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
  // {
  //   path: 'notification',
  //   component: NotificationStaffComponent,
  //   data: {
  //     pageTitle: 'Thông báo',
  //   },
  // },
  {
    path: 'feedback',
    component: FeedbackComponent,
    data: {
      pageTitle: 'Feedback',
    },
  },
  { path: '**', redirectTo: '/dashboard' },
];
