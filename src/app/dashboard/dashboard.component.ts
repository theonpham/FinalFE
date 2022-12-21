import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill/bill.service';
import { FoodService } from '../food/food.service';
import { FOOD } from '../food/food.const';
import { BILL } from '../bill/bill.const';
import { forkJoin } from 'rxjs';
import { FeedbackService } from '../feedback/feedback.service';
import { FEEDBACK } from '../feedback/feedback.const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  foodData: FOOD[] = [];
  billData: BILL[] = [];
  feedbackData: FEEDBACK[] = [];
  loaded = false;
  constructor(
    private serviceFood: FoodService,
    private serviceBill: BillService,
    private feedbackService: FeedbackService
  ) {}
  ngOnInit(): void {
    forkJoin([
      this.serviceFood.getAllFoodList(),
      this.serviceBill.getAllBill(),
      this.feedbackService.getAllFeedBackList(),
    ]).subscribe((data) => {
      this.foodData = data[0];
      this.billData = data[1].filter((bill) => bill.status == 3);
      this.feedbackData = data[2];
      console.log(this.feedbackData);

      this.loaded = true;
    });
  }
}
