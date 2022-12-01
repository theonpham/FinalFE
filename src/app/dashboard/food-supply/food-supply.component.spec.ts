import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSupplyComponent } from './food-supply.component';

describe('FoodSupplyComponent', () => {
  let component: FoodSupplyComponent;
  let fixture: ComponentFixture<FoodSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodSupplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
