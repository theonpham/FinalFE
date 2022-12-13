import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import { STAFF } from '../staff/staff.const';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginUrl =
    'https://restaurant-server-eight.vercel.app/restaurant/api/staff/login';
  currentUser!: STAFF;
  currentActiveUser = new Subject<STAFF>();
  currentActiveUser$ = this.currentActiveUser.asObservable();
  constructor(private http: ApiHttpService) {}
  login(input: any): Observable<STAFF> {
    return this.http.post(this.loginUrl, input);
  }
  setCurrentUser(input: any) {
    this.currentUser = input;
    this.currentActiveUser.next(input)
  }
  getCurrentUser(): STAFF {
    return this.currentUser;
  }
}
