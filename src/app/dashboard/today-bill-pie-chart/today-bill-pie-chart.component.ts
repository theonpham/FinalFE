import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, plugins } from 'chart.js';
import moment from 'moment';
import { BILL } from '../../bill/bill.const';

@Component({
  selector: 'app-today-bill-pie-chart',
  templateUrl: './today-bill-pie-chart.component.html',
  styleUrls: ['./today-bill-pie-chart.component.scss'],
})
export class TodayBillPieChartComponent implements OnInit {
  @Input() data!: BILL[];
  totalBillToday = 0;
  totalNumberBill = 0;
  totalCheckOutType0 = 0;
  totalCheckOutType1 = 0;
  totalCheckOutType2 = 0;

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    cutout: '85%',
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        backgroundColor: '#EAF3FF',
        titleColor: '#000000',
        bodyColor: '#000000',
        cornerRadius: 2,
        callbacks: {
          title(tooltipItems) {
            let total: number = 0;
            tooltipItems[0].dataset.data.forEach((val) => (total += val));
            let values = tooltipItems[0].parsed;
            return (
              Math.round((values / total) * 100) + '% ' + tooltipItems[0].label
            );
          },
        },
      },
    },
  };
  public pieChartLabels = ['Tiền mặt', 'Thanh toán', 'Chuyển khoản'];
  public pieChartDatasets = [
    {
      data: [0, 0, 0],
    },
  ];
  public pieChartLegend = false;
  public pieChartPlugins = [];
  constructor() {}

  ngOnInit(): void {
    let checkOutType0 = 0;
    let checkOutType1 = 0;
    let checkOutType2 = 0;
    const today = moment().format('DD/MM/YYYY');
    this.data = this.data.filter((bill) => {
      const billDate = moment(bill.createdAt).format('DD/MM/YYYY');
      return billDate == today;
    });
    this.totalNumberBill = this.data.length;
    this.data.forEach((bill) => {
      if (bill.checkoutType == '0') {
        checkOutType0 += bill.totalPrice;
        this.totalCheckOutType0++;
      } else if (bill.checkoutType == '1') {
        checkOutType1 += bill.totalPrice;
        this.totalCheckOutType1++;
      } else if (bill.checkoutType == '2') {
        checkOutType2 += bill.totalPrice;
        this.totalCheckOutType2++;
      }
    });
    this.pieChartDatasets = [
      {
        data: [checkOutType0, checkOutType1, checkOutType2],
      },
    ];
    this.totalBillToday = checkOutType0 + checkOutType1 + checkOutType2;
  }
}
