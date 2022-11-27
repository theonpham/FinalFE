export interface FOOD {
  _id: string;
  name: string;
  urlImage: string;
  type: string;
  total: any;
  price: any;
}
export const getFoodListURL =
  'https://restaurant-order.onrender.com/restaurant/api/products/all';
export const addFoodURL = 'https://createapiiii.herokuapp.com/addFood';
export const removeFoodURL = (id: string) =>
  `https://restaurant-order.onrender.com/restaurant/api/products/${id}?_method=DELETE`;
export const updateFoodURL = (id: string) =>
  `https://restaurant-order.onrender.com/restaurant/api/products/${id}?_method=PUT`;

// // For foods
// [GET] foods: https://restaurant-order.onrender.com/restaurant/api/foods

// // For drinks
// [GET] drinks: https://restaurant-order.onrender.com/restaurant/api/drinks

// // For update foods and drinks by id
// [GET] products: https://restaurant-order.onrender.com/restaurant/api/products/all

// [PUT] products:  https://restaurant-order.onrender.com/restaurant/api/products/:id?_method=PUT

// [DELETE] products: https://restaurant-order.onrender.com/restaurant/api/products/:id?_method=DELETE
