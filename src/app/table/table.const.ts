export interface TABLE {
  _id: string;
  name: string;
  capacity: number;
  floor: number;
}
export const getTableListURL = (floor: number) =>
  `https://mrestaurantorder.herokuapp.com/restaurant/api/table/all/${floor}`;
export const addTableURL =
  'https://mrestaurantorder.herokuapp.com/restaurant/api/table/create';

// //Table
// [GET] table: https://mrestaurantorder.herokuapp.com/restaurant/api/table/all/{floor}

// [POST] table: https://mrestaurantorder.herokuapp.com/restaurant/api/table/create
