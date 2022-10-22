import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import { getFoodListURL, FOOD, addFoodURL, removeFoodURL, updateFoodURL } from './food.const';

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
  addFood(input: FOOD): Observable<any> {
    return this.http.post(addFoodURL, input);
  }
  updateFood(input: any): Observable<any> {
    return this.http.post(updateFoodURL, input);
  }
  deleteFood(id: string): Observable<any> {
    return this.http.post(removeFoodURL);
  }
  changeFilterValue(value: any): void {
    this._filterValue.next(value);
  }
}
