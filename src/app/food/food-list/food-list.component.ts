import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodDetailComponent } from '../food-detail/food-detail.component';
import { FOOD } from '../food.const';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  constructor(private service: FoodService, private _dialog: MatDialog) {}
  data: FOOD[] = [];
  filteredData: FOOD[] = [];
  init = false;
  ngOnInit(): void {
    this.reload();
    this.service.filterValue$.subscribe((data) => {
      this.filterPredicate(data);
    });
  }
  reload() {
    this.init = false;
    this.service.getAllFoodList().subscribe((data) => {
      this.data = data;
      this.filteredData = this.data;
      this.init = true;
    });
  }
  filterPredicate(value: any) {
    if (value != null && !!this.data) {
      this.filteredData = this.data.filter((food) => {
        let match = true;
        if (!!value?.name) {
          match =
            match &&
            food.name.toLowerCase().includes(value?.name.toLowerCase());
        }
        if (!!value?.type) {
          match =
            match &&
            food.type.toLowerCase().includes(value?.type.toLowerCase());
        }
        if (!!value?.price) {
          match =
            match &&
            food.price.toLowerCase().includes(value?.price.toLowerCase());
        }
        return match;
      });
    }
  }
  openDetail(row: FOOD) {
    const dialogRef = this._dialog.open(FoodDetailComponent, {
      width: '1200px',
      height: '800px',
      data: {
        row: row,
      },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
}
