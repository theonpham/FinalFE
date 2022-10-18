import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import { getFoodListURL, FOOD } from './food.const';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private _filterValue = new BehaviorSubject<any>(null);
  public filterValue$ = this._filterValue.asObservable();
  constructor(private http: ApiHttpService) {}
  getAllFoodList(): Observable<FOOD[]> {
    return this.http.get(getFoodListURL);
  }
  changeFilterValue(value: any): void {
    this._filterValue.next(value);
  }
}
