import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPieChartComponent } from './feedback-pie-chart.component';

describe('FeedbackPieChartComponent', () => {
  let component: FeedbackPieChartComponent;
  let fixture: ComponentFixture<FeedbackPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackPieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
