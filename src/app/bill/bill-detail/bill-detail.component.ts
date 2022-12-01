import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BILL } from '../bill.const';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BillService } from '../bill.service';
import Swal from 'sweetalert2';
import { SnackBarCustomService } from 'src/app/shared/snackbar.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.scss'],
})
export class BillDetailComponent implements OnInit {
  // @ts-ignore
  selectedBill: BILL;
  pdfDisplay = true;
  totalBill = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: BILL,
    private service: BillService,
    private snackBar: SnackBarCustomService
  ) {}
  ngOnInit(): void {
    this.selectedBill = this.data;
    this.selectedBill.foods.forEach((food) => {
      this.totalBill += food.price;
    });
  }
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
        this.service.updateBill(this.selectedBill._id, input).subscribe(
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
