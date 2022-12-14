import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import {
  BILL,
  getBillLByTableURL,
  getBillListURL,
  sendBillNotificationURL,
  updateBillURL,
} from './bill.const';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  private _filterValue = new BehaviorSubject<any>(null);
  public filterValue$ = this._filterValue.asObservable();
  private _exportExcel = new Subject<any>();
  public exportExcel$ = this._exportExcel.asObservable();
  constructor(private http: ApiHttpService) {}
  getAllBill(): Observable<BILL[]> {
    return this.http.get(getBillListURL);
  }
  getTableBill(tableId: string): Observable<BILL[]> {
    return this.http.get(getBillLByTableURL(tableId));
  }
  updateBill(id: string, input: any): Observable<any> {
    return this.http.put(updateBillURL(id), input);
  }
  sendNotificationBill(input: any): Observable<any> {
    return this.http.post(sendBillNotificationURL(), input);
  }
  changeFilterValue(value: any): void {
    this._filterValue.next(value);
  }
  exportExcelData(value: any): void {
    this._exportExcel.next(value);
  }
}
