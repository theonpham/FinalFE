import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BILL } from '../bill.const';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BillService } from '../bill.service';
import Swal from 'sweetalert2';
import { SnackBarCustomService } from 'src/app/shared/snackbar.service';
import { TableService } from 'src/app/table/table.service';
import { forkJoin, takeLast } from 'rxjs';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.scss'],
})
export class BillDetailComponent implements OnInit {
  // @ts-ignore
  selectedBill: BILL;
  pdfDisplay = true;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: BILL,
    private service: BillService,
    private tableService : TableService,
    private snackBar: SnackBarCustomService
  ) {}
  ngOnInit(): void {
    this.selectedBill = this.data;
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
        input.status = 3;
        input.checkoutType = Number.parseInt(result.value);
        this.service.updateBill(this.selectedBill._id, input).subscribe(
          (res) => {
            const table = this.selectedBill.table;
            table.status = 0;
            const staff = this.selectedBill.staff;
            const notifyForm = {
              title : 'Thông báo',
              content : `Xác nhận hóa đơn bàn ${table.name} (tầng ${table.floor}) thành công`,
              tokenFCM : staff.tokenFCM,
              idBill : this.selectedBill._id,
            }
            
            forkJoin([
              this.tableService.updateTable(table._id,table),
              this.service.sendNotificationBill(notifyForm)
            ]).subscribe(()=>{
            this.snackBar.openSnackBar('Xác nhận thanh toán thành công', true);
            })
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
  renderBillStatus(row: BILL) {
    const status = row.status;
    if (status == 2) {
      return 'Chờ thanh toán';
    }
    if (status == 3) {
      return 'Đã thanh toán';
    }
    return 'Chưa chốt hóa đơn';
  }
}
const inputOptions = {
  0: 'Tiền mặt',
  1: 'Chuyển khoản',
  2: 'Quẹt thẻ',
};
