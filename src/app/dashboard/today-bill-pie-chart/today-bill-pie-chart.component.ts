import { Component, Input, OnInit } from '@angular/core';
import { BILL } from '../../bill/bill.const';

@Component({
  selector: 'app-today-bill-pie-chart',
  templateUrl: './today-bill-pie-chart.component.html',
  styleUrls: ['./today-bill-pie-chart.component.scss'],
})
export class TodayBillPieChartComponent implements OnInit {
  @Input() data!: BILL[];
  constructor() {}

  ngOnInit(): void {}
}
