import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import { STAFF, getStaffListURL, addStaffURL } from './staff.const';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private _filterValue = new BehaviorSubject<any>(null);
  public filterValue$ = this._filterValue.asObservable();
  constructor(private http: ApiHttpService) {}
  getAllStaffList(): Observable<STAFF[]> {
    return this.http.get(getStaffListURL);
  }
  addStaff(input: STAFF): Observable<any> {
    return this.http.post(addStaffURL, input);
  }
  // updateStaff(id: string, input: any): Observable<any> {
  //   return this.http.put(updateStaffURL(id), input);
  // }
  // deleteStaff(id: string): Observable<any> {
  //   return this.http.post(removeStaffURL);
  // }
  changeFilterValue(value: any): void {
    this._filterValue.next(value);
  }
}
