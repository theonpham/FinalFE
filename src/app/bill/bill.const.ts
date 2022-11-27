
 export interface BILL {
    _id: string;
    date: string;
    time: string;
    totalPrice: any;
    status: any;
    checkoutType: any;
    idTable: string;
    createdAt: string;
    foods : {
        _id : string;
        id: string;
        name: string;
        urlImage: string;
        price : any;
        total : any;
        createdAt: string;
        updatedAt: string;
    }[]
  } 
  export const getBillListURL =
  `https://restaurant-order.onrender.com/restaurant/api/bill/all`;
  export const getBillListByStatusURL = (status:any) =>
  `https://restaurant-order.onrender.com/restaurant/api/bill/all/${status}`;
  export const getBillLByTableURL = (tableID:any) =>
  `https://restaurant-order.onrender.com/restaurant/api/bill/${tableID}/product`;
export const addBillURL =
  'https://restaurant-order.onrender.com/restaurant/api/bill/create';
export const updateBillURL = (id: string) =>
  `https://restaurant-order.onrender.com/restaurant/api/bill/update/${id}?_method=PUT`;
// // Bill
// [GET] bill: https://restaurant-order.onrender.com/restaurant/api/bill/all

// [GET] bill by status: https://restaurant-order.onrender.com/restaurant/api/bill/all/:status

// [GET] product in bill: https://restaurant-order.onrender.com/restaurant/api/bill/:idTable/product

// [POST] bill: https://restaurant-order.onrender.com/restaurant/api/bill/create

// [GET] bill: https://restaurant-order.onrender.com/restaurant/api/bill/:idTable

// [PUT] bill: https://restaurant-order.onrender.com/restaurant/api/bill/update/:id?_method=PUT

// [POST] add product to bill: https://restaurant-order.onrender.com/restaurant/api//bill/product/add/:idBill
