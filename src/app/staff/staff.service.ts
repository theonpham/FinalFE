import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import {
  STAFF,
  getStaffListURL,
  addStaffURL,
  updateStaffURL,
  removeStaffURL,
} from './staff.const';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private _filterValue = new BehaviorSubject<any>(null);
  public filterValue$ = this._filterValue.asObservable();
  private _reloadTable = new Subject<any>();
  public reloadTable$ = this._reloadTable.asObservable();
  constructor(private http: ApiHttpService) {}
  getAllStaffList(): Observable<STAFF[]> {
    return this.http.get(getStaffListURL);
  }
  addStaff(input: STAFF): Observable<any> {
    return this.http.post(addStaffURL, input);
  }
  updateStaff(id: string, input: any): Observable<any> {
    return this.http.put(updateStaffURL(id), input);
  }
  deleteStaff(id: string): Observable<any> {
    return this.http.post(removeStaffURL(id));
  }
  changeFilterValue(value: any): void {
    this._filterValue.next(value);
  }
  reloadTableList(value: any): void {
    this._reloadTable.next(value);
  }
}
