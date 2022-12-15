import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BILL } from '../bill/bill.const';
import { ApiHttpService } from '../shared/api-http.service';
import {
  TABLE,
  getTableListURL,
  addTableURL,
  FLOOR,
  addFloorURL,
  getFloorListURL,
  getTableBillURL,
  updateTableURL,
} from './table.const';
@Injectable({
  providedIn: 'root',
})
export class TableService {
  private _filterValue = new BehaviorSubject<any>(null);
  public filterValue$ = this._filterValue.asObservable();
  private _reloadTable = new Subject<any>();
  public reloadTable$ = this._reloadTable.asObservable();
  constructor(private http: ApiHttpService) {}
  getAllTableList(): Observable<TABLE[]> {
    return this.http.get(getTableListURL());
  }
  addTable(input: TABLE): Observable<any> {
    return this.http.post(addTableURL, input);
  }
  getAllFloorList(): Observable<FLOOR[]> {
    return this.http.get(getFloorListURL);
  }
  addFloor(input: FLOOR): Observable<any> {
    return this.http.post(addFloorURL, input);
  }
  getTableBill(id:string): Observable<BILL> {
    return this.http.get(getTableBillURL(id));
  }
  updateTable(id: string, input: any): Observable<any> {
    return this.http.put(updateTableURL(id), input);
  }
  changeFilterValue(value: any): void {
    this._filterValue.next(value);
  }
  reloadTableList(value: any): void {
    this._reloadTable.next(value);
  }
}
