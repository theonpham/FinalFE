import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableInputComponent } from './table-input/table-input.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {}
  onAddRecord(event: Event) {
    event.preventDefault();
    const dialogRef = this._dialog.open(TableInputComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
}
