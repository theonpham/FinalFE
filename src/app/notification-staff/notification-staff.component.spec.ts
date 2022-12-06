import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationStaffComponent } from './notification-staff.component';

describe('NotificationStaffComponent', () => {
  let component: NotificationStaffComponent;
  let fixture: ComponentFixture<NotificationStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
