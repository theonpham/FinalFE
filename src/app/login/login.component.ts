import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CookieService],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: UntypedFormBuilder,
    private cookieService: CookieService,
    private router: Router
  ) {}
  formGroup: UntypedFormGroup = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });
  ngOnInit(): void {}
  onLogin() {
    const value = this.formGroup.getRawValue();
    if (value.username == 123 && value.password == 123) {
      this.cookieService.set('Login', 'true');
    }
  }
}
