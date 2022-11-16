import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillInputComponent } from './bill-input.component';

describe('BillInputComponent', () => {
  let component: BillInputComponent;
  let fixture: ComponentFixture<BillInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
