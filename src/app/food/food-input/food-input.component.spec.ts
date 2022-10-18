import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodInputComponent } from './food-input.component';

describe('FoodInputComponent', () => {
  let component: FoodInputComponent;
  let fixture: ComponentFixture<FoodInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
