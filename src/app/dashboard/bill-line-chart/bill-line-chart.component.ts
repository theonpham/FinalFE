import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartConfiguration, ChartOptions } from 'chart.js';
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
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: false,
        tension: 0.5,
        borderColor: '#59C8FF',
        backgroundColor: '#FFFFFF',
        pointBackgroundColor: '#004DAA',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
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
  dateHolder = 'Tháng trước';
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
  }
  reload() {}
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
