import { SideNav } from './sidenav.interface';

export const SIDENAV_CONTENTS: SideNav[] = [
  {
    name: 'Dashboard',
    svgIcon: 'dashboard',
    navLink: '/dashboard',
  },
  {
    name: 'Quản lý bàn ăn',
    svgIcon: 'table',
    navLink: '/table',
  },
  {
    name: 'Quản lý nhân viên',
    svgIcon: 'staff',
    navLink: '/staff',
  },
  {
    name: 'Hóa đơn',
    svgIcon: 'bill',
    navLink: '/bill',
  },
  {
    name: 'Món ăn',
    svgIcon: 'food',
    navLink: '/food',
  },
  {
    name: 'Khách hàng thân thiết',
    svgIcon: 'client',
    navLink: '/client',
  },
];
