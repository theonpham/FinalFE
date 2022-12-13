import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login/login.service';
import { Location } from '@angular/common';
import { MessagingService } from './firebase/messaging.service';
import { StaffService } from './staff/staff.service';
import { STAFF } from './staff/staff.const';

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
    private location: Location,
    private messagingSerivce : MessagingService,
    private staffService : StaffService,
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
    this.messagingSerivce.requestPermission();
    this.messagingSerivce.receiveMessage();
  }
  setLogin(data: any) {
    if (data) {
      this.loggedIn = true;
      this.service.setCurrentUser(data);
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
        const staff : STAFF = data;
        staff.tokenFCM = this.messagingSerivce.currentToken
        this.staffService.updateStaff(staff._id,staff).subscribe(()=>{
          console.log('Update token FCM thanh cong');
        })
        this.service.setCurrentUser(data);
      } else {
        this.cookieService.delete('login');
        this.loggedIn = false;
        this.router.navigate([`/login`]);
      }
      this.loaded = true;
    });
  }
}
