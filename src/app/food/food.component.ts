import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodInputComponent } from './food-input/food-input.component';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {}
  onAddRecord(event: Event) {
    event.preventDefault();
    const dialogRef = this._dialog.open(FoodInputComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
}
