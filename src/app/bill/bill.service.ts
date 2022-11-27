import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import { BILL, getBillLByTableURL, getBillListURL, updateBillURL } from './bill.const';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private _filterValue = new BehaviorSubject<any>(null);
  public filterValue$ = this._filterValue.asObservable();
  constructor(private http: ApiHttpService) { }
  getAllBill (): Observable<BILL[]>{
    return this.http.get(getBillListURL)
  }
  getTableBill (tableId:string): Observable<BILL[]>{
    return this.http.get(getBillLByTableURL(tableId))
  }
  updateBill(id:string, input: any): Observable<any>{
    return this.http.put(updateBillURL(id),input)
  }
  changeFilterValue(value: any): void {
    this._filterValue.next(value);
  }
}
