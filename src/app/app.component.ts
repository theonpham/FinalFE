import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login/login.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CookieService],
})
export class AppComponent implements OnInit {
  loggedIn = false;
  loaded = false;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private service: LoginService,
    private location: Location
  ) {}
  ngOnInit(): void {
    if (this.location.path() == '/login') {
      this.cookieService.delete('login');
      this.loggedIn = false;
      this.router.navigate([`/login`]);
    }
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/login') {
          this.cookieService.delete('login');
          this.loggedIn = false;
          this.router.navigate([`/login`]);
        }
      }
    });

    if (this.cookieService.check('login')) {
      const value = JSON.parse(this.cookieService.get('login'));
      this.onLogin(value);
    } else {
      this.loggedIn = false;
      this.loaded = true;
      this.router.navigate([`/login`]);
    }
  }
  setLogin(data: any) {
    if (data) {
      this.loggedIn = true;
    } else if (data == false) {
      this.loggedIn = false;
    } else {
      this.loggedIn = false;
    }
  }
  onLogin(value: any) {
    const valueString = JSON.stringify(value);
    this.service.login(value).subscribe((data) => {
      if (data) {
        this.cookieService.set('login', valueString);
        this.loggedIn = true;
      } else {
        this.cookieService.delete('login');
        this.loggedIn = false;
        this.router.navigate([`/login`]);
      }
      this.loaded = true;
    });
  }
}
