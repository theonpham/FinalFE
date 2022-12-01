import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/login/login.service';
import { SIDENAV_CONTENTS } from './sidenav.constant';
import { STAFF } from '../../staff/staff.const';
import { SideNav } from './sidenav.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  sidenavContents = SIDENAV_CONTENTS;
  constructor(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
    private pLocation: PlatformLocation,
    private cookieService: CookieService,
    private router: Router,
    private loginService: LoginService
  ) {
    // regis icon
    matIconRegistry.addSvgIcon(
      'dashboard',
      domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/dashboard.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'table',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/table.svg')
    );
    matIconRegistry.addSvgIcon(
      'staff',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/staff.svg')
    );
    matIconRegistry.addSvgIcon(
      'bill',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/bill.svg')
    );
    matIconRegistry.addSvgIcon(
      'food',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/food.svg')
    );
    matIconRegistry.addSvgIcon(
      'food-type',
      domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/food-type.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'client',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/client.svg')
    );
  }
  selectedMenu: string = '';
  currentUser!: STAFF;
  ngOnInit(): void {
    this.selectedMenu = (this.pLocation as any).location.pathname;
    if (this.selectedMenu == '/') this.selectedMenu = '/dashboard';
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/') {
          this.selectedMenu = '/dashboard';
        } else {
          this.selectedMenu = val.url;
        }
      }
    });
    this.currentUser = this.loginService.getCurrentUser();
  }
  selectMenu(link: string) {
    this.selectedMenu = link;
  }
  onLogout() {
    this.cookieService.delete('login');
    this.router.navigate([`/login`]);
  }
  checkAccess(content: SideNav) {
    if (this.currentUser.account == 'admin') {
      return true;
    } else {
      if (content.code?.includes(this.currentUser.account)) return true;
    }
    return false;
  }
}
