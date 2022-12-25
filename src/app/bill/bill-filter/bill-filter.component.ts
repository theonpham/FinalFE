import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-filter',
  templateUrl: './bill-filter.component.html',
  styleUrls: ['./bill-filter.component.scss'],
})
export class BillFilterComponent implements OnInit {
  formGroup!: FormGroup;
  nullForm: any;
  touched = false;
  constructor(private fb: FormBuilder, private service: BillService) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      date: [null, []],
      table: [null, []],
      floor : [null, []],
      status: [null, []],
      checkoutType: [null, []],
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
