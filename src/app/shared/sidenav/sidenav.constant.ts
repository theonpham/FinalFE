import { SideNav } from './sidenav.interface';

export const SIDENAV_CONTENTS: SideNav[] = [
  {
    name: 'Dashboard',
    svgIcon: 'dashboard',
    navLink: '/dashboard',
    code: ['admin'],
  },
  {
    name: 'Quản lý bàn ăn',
    svgIcon: 'table',
    navLink: '/table',
    code: ['admin', 'staff'],
  },
  {
    name: 'Quản lý nhân viên',
    svgIcon: 'staff',
    navLink: '/staff',
    code: ['admin'],
  },
  {
    name: 'Hóa đơn',
    svgIcon: 'bill',
    navLink: '/bill',
    code: ['admin', 'staff'],
  },
  {
    name: 'Món ăn',
    svgIcon: 'food',
    navLink: '/food',
    code: ['admin'],
  },
  // {
  //   name: 'Thể loại',
  //   svgIcon: 'food-type',
  //   navLink: '/food-type',
  // },
  // {
  //   name: 'Khách hàng thân thiết',
  //   svgIcon: 'client',
  //   navLink: '/client',
  // },
];
