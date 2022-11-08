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

  public post(url: any, body?: any, header?: any): Observable<any> {
    return this.http.post(url, body, header);
  }

  public put(url: any, body?: any, header?: any): Observable<any> {
    return this.http.put(url, body, header);
  }

  public delete(url: any, body?: any, header?: any): Observable<any> {
    return this.http.delete(url, body);
  }
}
