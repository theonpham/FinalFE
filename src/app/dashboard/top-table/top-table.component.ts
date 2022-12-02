import { Component, Input, OnInit } from '@angular/core';
import { BILL } from 'src/app/bill/bill.const';

@Component({
  selector: 'app-top-table',
  templateUrl: './top-table.component.html',
  styleUrls: ['./top-table.component.scss'],
})
export class TopTableComponent implements OnInit {
  @Input() data!: BILL[];
  tableList!: any[];
  top10: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.tableList = this.data.map((bill) => bill.table);
    let top = this.getTop10Food(this.tableList);
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
          const key = o.name;
          const item =
            r.get(key) ||
            Object.assign({}, o, {
              total: 0,
            });
          item.total++;
          return r.set(key, item);
        }, new Map())
        .values(),
    ];
    return result;
  }
}
