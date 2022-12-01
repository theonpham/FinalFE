import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill/bill.service';
import { FoodService } from '../food/food.service';
import { FOOD } from '../food/food.const';
import { BILL } from '../bill/bill.const';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  foodData: FOOD[] = [];
  billData: BILL[] = [];
  loaded = false;
  constructor(
    private serviceFood: FoodService,
    private serviceBill: BillService
  ) {}
  ngOnInit(): void {
    forkJoin([
      this.serviceFood.getAllFoodList(),
      this.serviceBill.getAllBill(),
    ]).subscribe((data) => {
      this.foodData = data[0];
      this.billData = data[1];
      this.loaded = true;
    });
  }
}
