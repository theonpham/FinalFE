export interface TABLE {
  _id: string;
  name: string;
  capacity: number;
  floor: number;
  status: any;
}
export interface FLOOR {
  _id: string;
  numberFloor: string;
}
export const getTableListURL = () =>
  `https://restaurant-server-eight.vercel.app/restaurant/api/table/all`;
export const addTableURL =
  'https://restaurant-server-eight.vercel.app/restaurant/api/table/create';
export const getFloorListURL =
  'https://restaurant-server-eight.vercel.app/restaurant/api/floor/all';
export const addFloorURL =
  'https://restaurant-server-eight.vercel.app/restaurant/api/floor/create';
  export const getTableBillURL = (id:string) =>
  `https://restaurant-server-eight.vercel.app/restaurant/api/bill/${id}`;
  export const   updateTableURL = (id:string) =>
  `https://restaurant-server-eight.vercel.app/restaurant/api/table/update/${id}?_method=PUT`
// //Table
// [GET] table: https://restaurant-server-eight.vercel.app/restaurant/api/table/all/{floor}

// [POST] table: https://restaurant-server-eight.vercel.app/restaurant/api/table/create

// [GET] table: https://restaurant-server-eight.vercel.app/restaurant/api/table/all
// https://restaurant-server-eight.vercel.app/restaurant/api/table/all
// https://restaurant-server-eight.vercel.app/restaurant/api/bill/:idTable

// //Floor
// [GET] floor: https://restaurant-server-eight.vercel.app/restaurant/api/floor/all

// [POST] floor: https://restaurant-server-eight.vercel.app/restaurant/api/floor/create
