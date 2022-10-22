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
    public data: FOOD,
    private service: FoodService
  ) {}
  ngOnInit(): void {
    if(this.data){
      this.selectedFood = this.data;
      this.patchValue(this.selectedFood)
    }
  }
  patchValue(food : FOOD){
    this.formGroup.patchValue({
      name : food.name,
      urlImage : food.urlImage,
      type : food.type,
      price : food.price,
      total : food .total
    })
  }
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
