import { Component, DoCheck, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CookieService],
})
export class AppComponent implements OnInit, DoCheck {
  loggedIn = false;
  constructor(private cookieService: CookieService, private router: Router) {}
  ngDoCheck(): void {
    if (this.cookieService.check('login')) {
      this.cookieService.get('login')
        ? (this.loggedIn = true)
        : (this.loggedIn = false);
    } else {
      this.loggedIn = false;
    }
  }
  ngOnInit(): void {
    if (!this.cookieService.check('login')) {
      this.router.navigate([`/login`]);
    }
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/login') {
          this.cookieService.delete('login');
        }
      }
    });
  }
}
