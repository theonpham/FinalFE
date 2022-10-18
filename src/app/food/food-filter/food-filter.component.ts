import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-filter',
  templateUrl: './food-filter.component.html',
  styleUrls: ['./food-filter.component.scss'],
})
export class FoodFilterComponent implements OnInit {
  formGroup!: FormGroup;
  nullForm: any;
  touched = false;
  constructor(private fb: FormBuilder, private service: FoodService) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [null, []],
      type: [null, []],
      price: [null, []],
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
