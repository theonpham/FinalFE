import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BILL } from '../bill.const';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.scss']
})
export class BillDetailComponent implements OnInit {
    // @ts-ignore
    selectedBill : BILL;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: BILL,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.selectedBill = this.data;
  }
}
