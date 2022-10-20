import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FOOD } from '../food.const';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-input',
  templateUrl: './food-input.component.html',
  styleUrls: ['./food-input.component.scss'],
})
export class FoodInputComponent implements OnInit {
  // @ts-ignore
  selectedFood: FOOD;
  formGroup: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    urlImage: [null, [Validators.required]],
    type: [null],
    price: [null],
    total: [null],
  });
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FoodInputComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { selectedFood: FOOD },
    private service: FoodService
  ) {}
  ngOnInit(): void {}
  onSubmit() {
    const input = this.formGroup.getRawValue();
    console.log(input);

    this.service.addFood(input).subscribe((data) => {
      console.log(data);
    });
  }
  onCloseSidenav() {
    this.dialogRef.close();
  }
}
