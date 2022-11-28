import { Component, OnInit } from '@angular/core';
import { BillService } from './bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {
  constructor(private service: BillService) {}

  ngOnInit(): void {}
  exportExcel() {
    this.service.exportExcelData('Bill');
  }
}
