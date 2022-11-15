export interface STAFF {
  id: string;
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
// export const updateStaffURL = (id: string) =>
//   `https://mrestaurantorder.herokuapp.com/restaurant/api/products/${id}?_method=DELETE`;
// export const removeStaffURL = (id: string) =>
//   `https://mrestaurantorder.herokuapp.com/restaurant/api/products/${id}?_method=PUT`;
// // Staff
// [GET] staff: https://mrestaurantorder.herokuapp.com/restaurant/api/staff/all

// [POST] staff: https://mrestaurantorder.herokuapp.com/restaurant/api/staff/create
