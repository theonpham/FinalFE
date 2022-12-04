export interface STAFF {
  _id: string;
  name: string;
  phoneNumber: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  floor: any;
  idFloor: string;
  account: string;
  password: string;
  floorNumber: string;
}
export const getStaffListURL =
  'https://restaurant-server-eight.vercel.app/restaurant/api/staff/all';
export const addStaffURL =
  'https://restaurant-server-eight.vercel.app/restaurant/api/staff/create';
export const updateStaffURL = (id: string) =>
  `https://restaurant-server-eight.vercel.app/restaurant/api/staff/update/${id}?_method=PUT`;
export const removeStaffURL = (id: string) =>
  `https://restaurant-server-eight.vercel.app/restaurant/api/staff/delete/${id}?_method=DELETE`;
// // Staff
// [GET] staff: https://restaurant-server-eight.vercel.app/restaurant/api/staff/all

// [POST] staff: https://restaurant-server-eight.vercel.app/restaurant/api/staff/create
// [PUT] staff: https://restaurant-server-eight.vercel.app/restaurant/api/staff/update/:id?_method=PUT

// [DELETE] staff: https://restaurant-server-eight.vercel.app/restaurant/api/staff/delete/:id?_method=DELETE
