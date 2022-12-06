import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartConfiguration, ChartDataset, ChartOptions } from 'chart.js';
import moment from 'moment';
import { start } from 'repl';
import { BILL } from 'src/app/bill/bill.const';

@Component({
  selector: 'app-bill-line-chart',
  templateUrl: './bill-line-chart.component.html',
  styleUrls: ['./bill-line-chart.component.scss'],
})
export class BillLineChartComponent implements OnInit {
  @Input() data!: BILL[];
  chartData: ChartDataset[] = [
    {
      data: [],
      label: 'Doanh Thu',
      fill: false,
      tension: 0.5,
      borderColor: '#59C8FF',
      backgroundColor: '#FFFFFF',
      pointBackgroundColor: '#004DAA',
    },
  ];
  chartLabel: any[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {},
      },
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        min: 0,
        ticks: {
          display: true,
        },
      },
    },
  };
  public lineChartLegend = false;
  start: any = null;
  end: any = null;
  formOpen = false;
  formGroup: FormGroup = this.fb.group({
    from: [null],
    to: [null],
  });
  dateHolder = 'Một tháng trước';
  @ViewChild('selection') selection!: ElementRef;
  constructor(private renderer: Renderer2, private fb: FormBuilder) {
    this.renderer.listen('window', 'click', (e: Event) => {
      let selector = '';
      let className = (e.target as any).classList;
      let el;
      if (className && className != '' && className.length > 0) {
        selector = '.' + Array.from(className).join('.');
        // @ts-ignore: Object is possibly 'null'
        el = document
          .querySelector(selector)
          ?.parentElement.closest('.cdk-overlay-pane.mat-datepicker-popup');
      } else {
        let idName = (e.target as any).id;
        if (idName && idName != '') {
          selector = '#' + idName;
          // @ts-ignore: Object is possibly 'null'
          el = document
            .querySelector(selector)
            ?.parentElement.closest('.cdk-overlay-pane.mat-datepicker-popup');
        }
      }
      if (!(selector != '' && el != null)) {
        if (this.selection?.nativeElement.contains(e.target)) {
          this.formOpen = true;
        } else {
          this.formOpen = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.end = new Date();
    this.start = new Date(
      this.end.getFullYear(),
      this.end.getMonth() - 1,
      this.end.getDate()
    );
    this.reload();
  }
  reload() {
    const filteredData = this.data.filter((bill) => {
      const billDate = moment(bill.createdAt).valueOf();
      if (!this.start && !this.end) {
        return true;
      } else if (!this.start && this.end) {
        return billDate <= moment(this.end).add(1, 'days').valueOf();
      } else if (this.start && !this.end) {
        moment(this.start).valueOf() <= billDate;
      }
      return (
        moment(this.start).valueOf() <= billDate &&
        billDate <= moment(this.end).add(1, 'days').valueOf()
      );
    });
    // Reset chart data
    this.chartData[0].data = [];
    this.chartLabel = [];
    const data = this.getBillDateTotal(filteredData);
    data.forEach((bill: any) => {
      // @ts-ignore
      this.chartLabel.push(bill.date);
      // @ts-ignore
      this.chartData[0].data.push(bill.total);
    });
  }
  getBillDateTotal(data: any) {
    const result = [
      ...data
        .reduce((r: any, o: any) => {
          const key = moment(o.createdAt).format('DD/MM/YYYY');
          const item =
            r.get(key) ||
            Object.assign({}, o, {
              total: 0,
            });
          item.total += o.totalPrice;
          return r.set(key, item);
        }, new Map())
        .values(),
    ];
    result.sort((a, b) => {
      return a.creatdAt < b.createdAt ? -1 : 1;
    });
    return result;
  }
  selectionChange() {
    const rawValue = this.formGroup?.getRawValue();
    this.renderPlaceHolder();
    rawValue.from !== null
      ? (this.start = rawValue.from?.toDate())
      : (this.start = null);
    rawValue.to !== null
      ? (this.end = rawValue.to?.toDate())
      : (this.end = null);
    this.reload();
  }
  renderPlaceHolder() {
    // @ts-ignore: Object is possibly 'null'
    let from = this.formGroup.get('from').value;
    // @ts-ignore: Object is possibly 'null'
    let to = this.formGroup.get('to').value;
    if (!!from || !!to) {
      let string = '';
      if (!!from) {
        string += moment(from).format('DD/MM/YYYY').toString();
      }
      string += ' - ';
      if (!!to) {
        string += moment(to).format('DD/MM/YYYY').toString();
      }
      this.dateHolder = string;
    } else {
      this.dateHolder = 'Tất cả';
    }
  }
  toggleForm() {
    this.formOpen = !this.formOpen;
  }
}
