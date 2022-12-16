import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import { FEEDBACK, getFeedBackListURL } from './feedback.const';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private _filterValue = new BehaviorSubject<any>(null);
  public filterValue$ = this._filterValue.asObservable();
  private _reloadTable = new Subject<any>();
  public reloadTable$ = this._reloadTable.asObservable();
  constructor(private http: ApiHttpService) {}
  reloadTableList(value: any): void {
    this._reloadTable.next(value);
  }
  changeFilterValue(value: any): void {
    this._filterValue.next(value);
  }
  getAllFeedBackList(): Observable<FEEDBACK[]> {
    return this.http.get(getFeedBackListURL);
  }
}
