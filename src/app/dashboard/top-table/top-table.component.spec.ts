import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTableComponent } from './top-table.component';

describe('TopTableComponent', () => {
  let component: TopTableComponent;
  let fixture: ComponentFixture<TopTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
