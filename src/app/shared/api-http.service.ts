import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  constructor(private http: HttpClient) {}
  public get(url: any): Observable<any> {
    return this.http.get(url);
  }

  public post(url: any, httpOption: any): Observable<any> {
    return this.http.post(url, httpOption);
  }

  public put(url: any, httpOption: any): Observable<any> {
    return this.http.put(url, httpOption);
  }

  public delete(url: any, httpOption: any): Observable<any> {
    return this.http.delete(url, httpOption);
  }
}
