import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-filter',
  templateUrl: './staff-filter.component.html',
  styleUrls: ['./staff-filter.component.scss'],
})
export class StaffFilterComponent implements OnInit {
  formGroup!: FormGroup;
  nullForm: any;
  touched = false;
  constructor(private fb: FormBuilder, private service: StaffService) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [null, []],
      phoneNumber: [null, []],
      gender: [null, []],
    });
    this.nullForm = this.formGroup.getRawValue();
  }
  changeFilterValue(filterValue: any) {
    this.checkTouched(filterValue);
    this.service.changeFilterValue(filterValue);
  }
  checkTouched(filterValue: any) {
    let a = Object.entries(filterValue).toString();
    let b = Object.entries(this.nullForm).toString();
    if (a === b || a === Object.entries({}).toString()) {
      this.touched = false;
    } else {
      this.touched = true;
    }
  }
  onReset() {
    this.touched = false;
    this.formGroup?.reset();
    this.service.changeFilterValue(this.formGroup.getRawValue());
  }
}
