import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { STAFF } from 'src/app/staff/staff.const';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  currentUser!: STAFF;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.currentUser = this.loginService.getCurrentUser();
  }
}
