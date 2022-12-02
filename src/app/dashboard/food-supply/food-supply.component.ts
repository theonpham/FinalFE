import {
  trigger,
  state,
  style,
  AUTO_STYLE,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FOOD } from '../../food/food.const';

@Component({
  selector: 'app-food-supply',
  templateUrl: './food-supply.component.html',
  styleUrls: ['./food-supply.component.scss'],
  animations: [
    trigger('toggleBox', [
      state(
        'open',
        style({
          height: AUTO_STYLE,
        })
      ),
      state(
        'closed',
        style({
          height: '416px',
          overflow: 'hidden',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class FoodSupplyComponent implements OnInit {
  @Input() data: FOOD[] = [];
  isExpanded = false;

  constructor() {}

  ngOnInit(): void {
    this.data = this.data.sort((a, b) => (a.total > b.total ? 1 : -1));
  }
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
