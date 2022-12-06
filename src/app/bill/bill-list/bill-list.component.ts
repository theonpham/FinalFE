import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import { SnackBarCustomService } from 'src/app/shared/snackbar.service';
import { BillDetailComponent } from '../bill-detail/bill-detail.component';
import { BILL } from '../bill.const';
import { BillService } from '../bill.service';
import * as fs from 'file-saver';
import { Subject, takeUntil } from 'rxjs';
import { Workbook } from 'exceljs';
import { DatePipe } from '@angular/common';
import { MessagingService } from 'src/app/firebase/messaging.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss'],
})
export class BillListComponent implements OnInit {
  dataSource!: MatTableDataSource<BILL>;
  data: BILL[] = [];
  init = false;
  displayedColumns = [
    'createdAt',
    'table',
    'totalPrice',
    'status',
    'checkoutType',
  ];
  excelColumn: any[] = [
    'createdAt',
    'table',
    'totalPrice',
    'status',
    'checkoutType',
  ];
  excelHeader: any[] = [
    'Ngày',
    'Bàn',
    'Tổng đơn',
    'Trạng thái',
    'Thanh toán loại',
  ];
  excelData: any[] = [];
  filterValue: any;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private _dialog: MatDialog,
    private service: BillService,
    private snackBar: SnackBarCustomService,
    private datePipe: DatePipe,
    private messagingSerivce : MessagingService
  ) {}

  ngOnInit(): void {
    this.reload();
    this.messagingSerivce.currentMessage$.subscribe((data)=>{
      if(data){
        this.reload()
      }
    })
  }
  reload(){
    this.service.getAllBill().subscribe((data) => {
      this.init = true;
      this.data = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'createdAt':
            return item.createdAt;

          case 'totalPrice':
            return item.totalPrice;
          case 'status':
            return item.status;
          case 'checkoutType':
            return item.checkoutType;
          default:
            // @ts-ignore
            return item[property];
        }
      };
      this.dataSource.filterPredicate = this.filterPredicate;
      this.dataSource.sort = this.sort;
      this.sort.sort(({ id: 'createdAt', start: 'desc'}) as MatSortable);
      this.dataSource.paginator = this.paginator;
      this.reloadFilter();
      this.excelLoad();
    });
  }
  reloadFilter() {
    this.service.filterValue$.subscribe((filterValue) => {
      if (!!filterValue && !!this.dataSource) {
        this.filterValue = filterValue;
        this.dataSource.filter = JSON.stringify(this.filterValue);
      }
    });
  }
  openDetail(row: BILL) {
    const dialogRef = this._dialog.open(BillDetailComponent, {
      width: '550px',
      data: row,
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
  renderCheckOutType(row: BILL) {
    const type = row.checkoutType;
    if (row.status) {
      if (type == 0) {
        return 'Tiền mặt';
      }
      if (type == 1) {
        return 'Chuyển khoản';
      }
      if (type == 2) {
        return 'Quẹt thẻ';
      }
    }
    return '---';
  }
  filterPredicate = (bill: BILL): boolean => {
    if (this.filterValue) {
      let isMatched =
        (!!this.filterValue?.table
          ? bill?.table.name
              ?.toLowerCase()
              .includes(this.filterValue?.table.toLowerCase())
          : true) &&
        (this.filterValue?.checkoutType != null
          ? bill?.checkoutType === this.filterValue?.checkoutType
          : true) &&
        (this.filterValue?.status != null
          ? bill?.status === this.filterValue?.status
          : true);
      if (!!this.filterValue.date) {
        const result = moment(bill.createdAt).format('DD/MM/YYYY');
        const filter = moment(this.filterValue.date).format('DD/MM/YYYY');
        isMatched = result == filter;
      }
      return isMatched;
    }
    return true;
  };
  createExcelData(dataSource: BILL[]) {
    let eachRowArray: any = [];
    const data = [...dataSource];
    [...data].forEach((eachBill: any) => {
      [...this.excelColumn].forEach((columnName: string) => {
        if (columnName == 'createdAt') {
          if (eachBill[columnName] === null) eachRowArray.push('');
          else
            eachRowArray.push(
              moment(eachBill[columnName]).format('DD/MM/yyyy')
            );
        } else if (columnName == 'table') {
          if (eachBill?.table?.name === null) eachRowArray.push('');
          else eachRowArray.push(eachBill?.table?.name);
        } else {
          if (eachBill[columnName] === null) eachRowArray.push('');
          else if (
            eachBill[columnName] === true ||
            eachBill[columnName].toString() === 'true'
          )
            eachRowArray.push('Yes');
          else if (
            eachBill[columnName] === false ||
            eachBill[columnName].toString() === 'false'
          )
            eachRowArray.push('No');
          else eachRowArray.push(eachBill[columnName]);
        }
      });
      this.excelData.push(eachRowArray);
      eachRowArray = [];
    });
    // The row on Excel is sorted by name
    this.excelData.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    });
  }
  private readonly _destroying$ = new Subject<void>();
  ngOnDestroy(): void {
    this._destroying$.next();
    this._destroying$.complete();
  }
  excelLoad() {
    this.service.exportExcel$
      .pipe(takeUntil(this._destroying$))
      .subscribe((sheetName) => {
        if (sheetName) {
          // reset data here;
          this.excelData = [];
          // create data here;
          this.createExcelData(this.data);
          const fileName =
            'Bill_' + this.datePipe.transform(new Date(), 'ddMMyyyy') + '.xlsx';
          // Create workbook and worksheet
          const workbook = new Workbook();
          // sheet name
          const worksheet = workbook.addWorksheet('Bill', {
            views: [{ state: 'frozen', ySplit: 1 }],
          });
          // Add Header Row
          const headerList = [...this.excelHeader];
          const headerRow = worksheet.addRow(headerList);
          // adjust each columns(width)
          for (let column = 1; column < headerList.length + 1; column++) {
            worksheet.getColumn(column).width = 40;
          }
          // Cell Style : Fill and Border
          headerRow.eachCell((cell: any) => {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'FFFFFF00' },
              bgColor: { argb: 'FF0000FF' },
            };
            cell.border = {
              top: { style: 'thin' },
              left: { style: 'thin' },
              bottom: { style: 'thin' },
              right: { style: 'thin' },
            };
          });

          this.excelData.forEach((eachBill) => {
            worksheet.addRow(eachBill);
          });
          // adjust each columns(width)
          for (let column = 1; column < +1; column++) {
            worksheet.getColumn(column).width = 40;
          }
          // Generate Excel File with given name
          workbook.xlsx.writeBuffer().then((data: any) => {
            const blob = new Blob([data], {
              type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            });
            fs.saveAs(blob, fileName);
          });
        }
      });
  }
}
