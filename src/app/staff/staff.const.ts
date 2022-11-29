export interface STAFF {
  _id: string;
  name: string;
  phoneNumber: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  idFloor: string;
  account: string;
  password: string;
  floorNumber: string;
}
export const getStaffListURL =
  'https://restaurant-order.onrender.com/restaurant/api/staff/all';
export const addStaffURL =
  'https://restaurant-order.onrender.com/restaurant/api/staff/create';
export const updateStaffURL = (id: string) =>
  `https://restaurant-order.onrender.com/restaurant/api/staff/update/${id}?_method=PUT`;
export const removeStaffURL = (id: string) =>
  `https://restaurant-order.onrender.com/restaurant/api/staff/delete/${id}?_method=DELETE`;
// // Staff
// [GET] staff: https://restaurant-order.onrender.com/restaurant/api/staff/all

// [POST] staff: https://restaurant-order.onrender.com/restaurant/api/staff/create
// [PUT] staff: https://restaurant-order.onrender.com/restaurant/api/staff/update/:id?_method=PUT

// [DELETE] staff: https://restaurant-order.onrender.com/restaurant/api/staff/delete/:id?_method=DELETE
