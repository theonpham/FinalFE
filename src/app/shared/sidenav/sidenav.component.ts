import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SIDENAV_CONTENTS } from './sidenav.constant';

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
    private pLocation: PlatformLocation
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
      'client',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/client.svg')
    );
  }
  selectedMenu: string = '';

  ngOnInit(): void {
    this.selectedMenu = (this.pLocation as any).location.pathname;
  }
  selectMenu(link: string) {
    this.selectedMenu = link;
  }
}
