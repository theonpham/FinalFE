import { STAFF } from '../staff/staff.const';
import { TABLE } from '../table/table.const';

export interface FEEDBACK {
  _id: string;
  status: any;
  title: any;
  content: any;
  table: TABLE;
  staff: STAFF;
  date: string;
  time: string;
}
export const getFeedBackListURL =
  'https://restaurant-server-eight.vercel.app/restaurant/api/feedback/all';
