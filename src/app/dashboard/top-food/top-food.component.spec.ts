import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFoodComponent } from './top-food.component';

describe('TopFoodComponent', () => {
  let component: TopFoodComponent;
  let fixture: ComponentFixture<TopFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
