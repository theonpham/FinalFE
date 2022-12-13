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
import { forkJoin } from 'rxjs';
import { MessagingService } from 'src/app/firebase/messaging.service';
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
    private messagingSerivce : MessagingService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.service.getTableBill(this.data._id).subscribe((data) => {
      if (data) {
        const date = moment(data.createdAt).format('DD/MM/YYYY');
        const today = moment().format('DD/MM/YYYY');
        if (today == date) {
          this.selectedBill = data;
          this.hasBill = true;
        }
      }
      this.loading = false;
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
        input.status = 3;
        input.checkoutType = Number.parseInt(result.value);
        this.billService.updateBill(this.selectedBill._id, input).subscribe(
          (res) => {
            const table = this.selectedBill.table;
            table.status = 0;
            const staff = this.selectedBill.staff;
            const notifyForm = {
              title : 'Thông báo',
              content : 'Xác nhận hóa đơn thành công',
              tokenFCM : staff.tokenFCM,
              idBill : this.selectedBill._id,
            }
            
            forkJoin([
              this.service.updateTable(table._id,table),
              this.billService.sendNotificationBill(notifyForm)
            ]).subscribe(()=>{
            this.snackBar.openSnackBar('Xác nhận thanh toán thành công', true);
            this.messagingSerivce.currentMessage.next('reload')
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
