import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StaffInputComponent } from './staff-input/staff-input.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {}
  onAddRecord(event: Event) {
    event.preventDefault();
    const dialogRef = this._dialog.open(StaffInputComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
}
