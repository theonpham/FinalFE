import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, DatasetChartOptions } from 'chart.js';
import { FEEDBACK } from 'src/app/feedback/feedback.const';

@Component({
  selector: 'app-feedback-pie-chart',
  templateUrl: './feedback-pie-chart.component.html',
  styleUrls: ['./feedback-pie-chart.component.scss'],
})
export class FeedbackPieChartComponent implements OnInit {
  @Input() name: string = '';
  @Input() data!: FEEDBACK[];
  value: any[] = [];
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
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
      data: [1, 2, 3],
    },
  ];
  public pieChartLegend = false;
  public pieChartPlugins = [];
  constructor() {}

  ngOnInit(): void {
    if (this.name == 'Mức độ hài lòng') {
      this.value = [0, 0, 0, 0, 0];
      this.data.forEach((feedback) => {
        if (feedback.status == 0) {
          this.value[0]++;
        } else if (feedback.status == 1) {
          this.value[1]++;
        } else if (feedback.status == 2) {
          this.value[2]++;
        } else if (feedback.status == 3) {
          this.value[3]++;
        } else if (feedback.status == 4) {
          this.value[4]++;
        }
      });
      this.pieChartLabels = [
        'Rất không hài lòng',
        'Không hài lòng',
        'Bình thường',
        'Hài lòng',
        'Rất hài lòng',
      ];
      this.pieChartDatasets[0].data = this.value;
    } else if (this.name == 'Đánh giá chi tiết') {
      this.value = [0, 0, 0];
      this.data.forEach((feedback) => {
        if (feedback.title == 0) {
          this.value[0]++;
        } else if (feedback.title == 1) {
          this.value[1]++;
        } else if (feedback.title == 2) {
          this.value[2]++;
        }
      });
      this.pieChartLabels = [
        'Nhiều vấn đề chưa tốt',
        'Một số vấn đề chưa tốt',
        'Mọi thứ hoàn hảo',
      ];
      this.pieChartDatasets[0].data = this.value;
    }
  }
}
