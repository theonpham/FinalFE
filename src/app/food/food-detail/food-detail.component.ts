import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodInputComponent } from '../food-input/food-input.component';
import { FOOD } from '../food.const';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {
    // @ts-ignore
  selectedFood : FOOD;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: FOOD,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.selectedFood = this.data
  }
  onEdit(){
    const dialogRef = this._dialog.open(FoodInputComponent, {
      width: '800px',
      data : this.selectedFood
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
}
