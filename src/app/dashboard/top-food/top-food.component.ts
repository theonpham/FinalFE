import { Component, Input, OnInit } from '@angular/core';
import { BILL } from 'src/app/bill/bill.const';
import { FOOD } from 'src/app/food/food.const';

@Component({
  selector: 'app-top-food',
  templateUrl: './top-food.component.html',
  styleUrls: ['./top-food.component.scss'],
})
export class TopFoodComponent implements OnInit {
  @Input() data!: BILL[];
  foodList!: any[];
  top10: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.foodList = [];
    this.data.forEach((bill) =>
      bill.foods.forEach((food) =>
        this.foodList.push({
          amount: food.amount,
          name: food.name,
          id: food._id,
        })
      )
    );
    let top = this.getTop10Food(this.foodList);
    top = top.map((element: any, index: any) => {
      let position = index + 1;
      return {
        position,
        ...element,
      };
    });
    this.top10 = top;
  }
  getTop10Food(data: any) {
    const result = [
      ...data
        .reduce((r: any, o: any) => {
          const key = o.id;
          const item =
            r.get(key) ||
            Object.assign({}, o, {
              total: 0,
            });
          item.total += o.amount;
          return r.set(key, item);
        }, new Map())
        .values(),
    ];
    return result;
  }
}
