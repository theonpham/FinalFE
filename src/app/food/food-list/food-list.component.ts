import { Component, OnInit } from '@angular/core';
import { FOOD } from '../food.const';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  constructor(private service: FoodService) {}
  data: FOOD[] = [];
  filteredData: FOOD[] = [];
  ngOnInit(): void {
    this.reload();
  }
  reload() {
    this.service.getAllFoodList().subscribe((data) => {
      this.data = data;
      this.filteredData = this.data;
    });
  }
}
