import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SnackBarCustomService } from '../shared/snackbar.service';
import { STAFF } from '../staff/staff.const';
import { StaffService } from '../staff/staff.service';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CookieService],
})
export class LoginComponent implements OnInit {
  @Output() login = new EventEmitter<any>();
  constructor(
    private fb: UntypedFormBuilder,
    private cookieService: CookieService,
    private router: Router,
    private service: LoginService,
    private snackbarService: SnackBarCustomService,
    private staffService : StaffService,

  ) {}
  formGroup: UntypedFormGroup = this.fb.group({
    account: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });
  ngOnInit(): void {}
  onLogin(value: any) {
    const valueString = JSON.stringify(value);
    this.service.login(value).subscribe((data) => {
      if (data) {
        this.login.emit(data);
        const staff : STAFF = data;
        this.staffService.updateStaff(staff._id,staff).subscribe(()=>{
          console.log('Update token FCM thanh cong');
        })
        this.cookieService.set('login', valueString);
        this.snackbarService.openSnackBar('Đăng nhập thành công', true);
        if (data.role == `1`) {
          this.router.navigate([`/dashboard`]);
        } else {
          this.router.navigate([`/table`]);
        }
      } else {
        this.login.emit(false);
        this.snackbarService.openSnackBar('Đăng nhập thất bại', false);
      }
    });
  }
}
