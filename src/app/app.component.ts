import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CookieService],
})
export class AppComponent implements OnInit {
  loggedIn = false;
  constructor(private cookieService: CookieService, private router: Router) {}
  ngOnInit(): void {
    if (this.cookieService.check('login')) {
      this.cookieService.get('login')
        ? (this.loggedIn = true)
        : (this.loggedIn = false);
      if (this.loggedIn) this.router.navigate([`/dashboard`]);
    } else {
      this.router.navigate([`/login`]);
    }
  }
}
