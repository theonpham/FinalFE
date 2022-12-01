import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayBillPieChartComponent } from './today-bill-pie-chart.component';

describe('TodayBillPieChartComponent', () => {
  let component: TodayBillPieChartComponent;
  let fixture: ComponentFixture<TodayBillPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayBillPieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayBillPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
