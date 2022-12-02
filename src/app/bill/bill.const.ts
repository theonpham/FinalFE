import { TABLE } from '../table/table.const';
export interface BILL {
  _id: string;
  date: string;
  time: string;
  totalPrice: any;
  status: any;
  checkoutType: any;
  table: TABLE;
  createdAt: string;
  foods: {
    _id: string;
    id: string;
    name: string;
    urlImage: string;
    price: any;
    total: any;
    createdAt: string;
    updatedAt: string;
    amount: number;
  }[];
}
export const getBillListURL = `https://restaurant-server-eight.vercel.app/restaurant/api/bill/all`;
export const getBillListByStatusURL = (status: any) =>
  `https://restaurant-server-eight.vercel.app/restaurant/api/bill/all/${status}`;
export const getBillLByTableURL = (tableID: any) =>
  `https://restaurant-server-eight.vercel.app/restaurant/api/bill/${tableID}/product`;
export const addBillURL =
  'https://restaurant-server-eight.vercel.app/restaurant/api/bill/create';
export const updateBillURL = (id: string) =>
  `https://restaurant-server-eight.vercel.app/restaurant/api/bill/update/${id}?_method=PUT`;
// // Bill
// [GET] bill: https://restaurant-server-eight.vercel.app/restaurant/api/bill/all

// [GET] bill by status: https://restaurant-server-eight.vercel.app/restaurant/api/bill/all/:status

// [GET] product in bill: https://restaurant-server-eight.vercel.app/restaurant/api/bill/:idTable/product

// [POST] bill: https://restaurant-server-eight.vercel.app/restaurant/api/bill/create

// [GET] bill: https://restaurant-server-eight.vercel.app/restaurant/api/bill/:idTable

// [PUT] bill: https://restaurant-server-eight.vercel.app/restaurant/api/bill/update/:id?_method=PUT

// [POST] add product to bill: https://restaurant-server-eight.vercel.app/restaurant/api//bill/product/add/:idBill
