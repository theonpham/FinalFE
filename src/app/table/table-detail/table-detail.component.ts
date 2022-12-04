import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';
import { BILL } from 'src/app/bill/bill.const';
import { TABLE } from '../table.const';
import { TableService } from '../table.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
import { SnackBarCustomService } from 'src/app/shared/snackbar.service';
import { BillService } from 'src/app/bill/bill.service';
@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss'],
})
export class TableDetailComponent implements OnInit {
  bill: BILL[] = [];
  hasBill = false;
  loading = true;
  selectedBill!: BILL;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: TABLE,
    private service: TableService,
    private billService : BillService,
    private snackBar: SnackBarCustomService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.service.getTableBill(this.data._id).subscribe((data) => {
      this.loading = false;
      if (data) {
        const date = moment(data.createdAt).format('DD/MM/YYYY');
        const today = moment().format('DD/MM/YYYY');
        if (data.status == 0 && today == date) {
          this.selectedBill = data;
          this.hasBill = true;
        }
      }
    });
  }
  // Current Bill
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 95;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png', 1.0);
      let PDF = new jsPDF('p', 'mm', 'a6');
      PDF.addImage(FILEURI, 'PNG', 5, 5, fileWidth, fileHeight);
      PDF.output('dataurlnewwindow');
    });
  }
  updateBill(): void {
    Swal.fire({
      title: 'Xác nhận kiểu thanh toán',
      input: 'radio',
      inputOptions: inputOptions,
    }).then((result) => {
      if (result.isConfirmed) {
        const input = this.selectedBill;
        input.status = 1;
        input.checkoutType = Number.parseInt(result.value);
        this.billService.updateBill(this.selectedBill._id, input).subscribe(
          (res) => {
            this.snackBar.openSnackBar('Xác nhận thanh toán thành công', true);
          },
          (err) => {
            this.snackBar.openSnackBar(
              'Xác nhận thanh toán không thành công',
              false
            );
          }
        );
      }
    });
  }
}
const inputOptions = {
  0: 'Tiền mặt',
  1: 'Chuyển khoản',
  2: 'Quẹt thẻ',
};
