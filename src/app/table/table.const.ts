export interface TABLE {
  _id: string;
  name: string;
  capacity: number;
  floor: number;
}
export const getTableListURL = () =>
  `https://restaurant-order.onrender.com/restaurant/api/table/all`;
export const addTableURL =
  'https://restaurant-order.onrender.com/restaurant/api/table/create';

// //Table
// [GET] table: https://restaurant-order.onrender.com/restaurant/api/table/all/{floor}

// [POST] table: https://restaurant-order.onrender.com/restaurant/api/table/create

// [GET] table: https://restaurant-order.onrender.com/restaurant/api/table/all
// https://restaurant-order.onrender.com/restaurant/api/table/all
// https://restaurant-order.onrender.com/restaurant/api/bill/:idTable

// //Floor
// [GET] floor: https://restaurant-order.onrender.com/restaurant/api/floor/all

// [POST] floor: https://restaurant-order.onrender.com/restaurant/api/floor/create
