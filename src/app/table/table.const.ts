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
  `https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/table/all`;
export const addTableURL =
  'https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/table/create';
export const getFloorListURL =
  'https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/floor/all';
export const addFloorURL =
  'https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/floor/create';
// //Table
// [GET] table: https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/table/all/{floor}

// [POST] table: https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/table/create

// [GET] table: https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/table/all
// https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/table/all
// https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/bill/:idTable

// //Floor
// [GET] floor: https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/floor/all

// [POST] floor: https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/floor/create
