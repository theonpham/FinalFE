export interface TABLE {
  _id: string;
  name: string;
  capacity: number;
  floor: number;
}
export const getTableListURL = () =>
  `https://mrestaurantorder.herokuapp.com/restaurant/api/table/all`;
export const addTableURL =
  'https://mrestaurantorder.herokuapp.com/restaurant/api/table/create';

// //Table
// [GET] table: https://mrestaurantorder.herokuapp.com/restaurant/api/table/all/{floor}

// [POST] table: https://mrestaurantorder.herokuapp.com/restaurant/api/table/create

// [GET] table: https://mrestaurantorder.herokuapp.com/restaurant/api/table/all
// https://mrestaurantorder.herokuapp.com/restaurant/api/table/all
// https://mrestaurantorder.herokuapp.com/restaurant/api/bill/:idTable

// //Floor
// [GET] floor: https://mrestaurantorder.herokuapp.com/restaurant/api/floor/all

// [POST] floor: https://mrestaurantorder.herokuapp.com/restaurant/api/floor/create
