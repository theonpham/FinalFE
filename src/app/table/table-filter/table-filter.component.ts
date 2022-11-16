import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
})
export class TableFilterComponent implements OnInit {
  formGroup!: FormGroup;
  nullForm: any;
  touched = false;
  constructor(private fb: FormBuilder, private service: TableService) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [null, []],
      status: [null, []],
      floor: [null, []],
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
