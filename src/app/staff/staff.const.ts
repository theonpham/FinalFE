export interface STAFF {
  _id: string;
  name: string;
  phoneNumber: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}
export const getStaffListURL =
  'https://mrestaurantorder.herokuapp.com/restaurant/api/staff/all';
export const addStaffURL =
  'https://mrestaurantorder.herokuapp.com/restaurant/api/staff/create';
export const updateStaffURL = (id: string) =>
  `https://mrestaurantorder.herokuapp.com/restaurant/api/staff/update/${id}?_method=PUT`;
export const removeStaffURL = (id: string) =>
  `https://mrestaurantorder.herokuapp.com/restaurant/api/staff/delete/${id}?_method=DELETE`;
// // Staff
// [GET] staff: https://mrestaurantorder.herokuapp.com/restaurant/api/staff/all

// [POST] staff: https://mrestaurantorder.herokuapp.com/restaurant/api/staff/create
// [PUT] staff: https://mrestaurantorder.herokuapp.com/restaurant/api/staff/update/:id?_method=PUT

// [DELETE] staff: https://mrestaurantorder.herokuapp.com/restaurant/api/staff/delete/:id?_method=DELETE
