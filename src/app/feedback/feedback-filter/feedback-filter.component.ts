import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-filter',
  templateUrl: './feedback-filter.component.html',
  styleUrls: ['./feedback-filter.component.scss'],
})
export class FeedbackFilterComponent implements OnInit {
  formGroup!: FormGroup;
  nullForm: any;
  touched = false;
  constructor(private fb: FormBuilder, private service: FeedbackService) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      status: [null, []],
      title: [null, []],
      staff: [null, []],
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
