import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import {
  TABLE,
  getTableListURL,
  addTableURL,
  FLOOR,
  addFloorURL,
  getFloorListURL,
} from './table.const';
@Injectable({
  providedIn: 'root',
})
export class TableService {
  private _filterValue = new BehaviorSubject<any>(null);
  public filterValue$ = this._filterValue.asObservable();
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
  // updateTable(id: string, input: any): Observable<any> {
  //   return this.http.put(updateTableURL(id), input);
  // }
  // deleteTable(id: string): Observable<any> {
  //   return this.http.post(removeTableURL(id));
  // }
  changeFilterValue(value: any): void {
    this._filterValue.next(value);
  }
}
