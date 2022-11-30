import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import { STAFF } from '../staff/staff.const';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginUrl =
    'https://restaurant-server-7ls5n2j71-leiverin.vercel.app/restaurant/api/staff/login';
  currentUser!: STAFF;
  constructor(private http: ApiHttpService) {}
  login(input: any): Observable<STAFF> {
    return this.http.post(this.loginUrl, input);
  }
  setCurrentUser(input: any) {
    this.currentUser = input;
  }
  getCurrentUser() {
    return this.currentUser;
  }
}
