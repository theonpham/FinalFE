import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import { getFoodListURL, FOOD } from './food.const';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: ApiHttpService) {}
  getAllFoodList(): Observable<FOOD[]> {
    return this.http.get(getFoodListURL);
  }
}
