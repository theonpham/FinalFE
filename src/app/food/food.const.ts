export interface FOOD {
  _id?: string;
  name: string;
  urlImage: string;
  type: string;
  total: any;
  price: any;
}
export const getFoodListURL = 'https://createapiiii.herokuapp.com/getall';
export const addFoodURL = 'https://createapiiii.herokuapp.com/';
export const removeFoodURL = 'https://createapiiii.herokuapp.com/delete';
export const updateFoodURL = 'https://createapiiii.herokuapp.com/update';
