import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarCustomService } from 'src/app/shared/snackbar.service';
import { BillDetailComponent } from '../bill-detail/bill-detail.component';
import { BILL } from '../bill.const';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {
  dataSource!: MatTableDataSource<BILL>;
  data: BILL[] = [];
  init = false;
  displayedColumns = [
    'createdAt',
    'totalPrice',
    'status',
    'checkoutType',
  ];
  filterValue: any;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private _dialog: MatDialog,
    private service: BillService,
    private snackBar: SnackBarCustomService
  ) { }

  ngOnInit(): void {
    this.service.getAllBill().subscribe((data)=>{
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
      this.dataSource.paginator = this.paginator;
      this.reloadFilter();
    })
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
  renderCheckOutType(row:BILL){
    const type = row.checkoutType;
    if(row.status){
      if(type==0){
        return 'Tiền mặt'
      }
      if(type==1){
        return 'Chuyển khoản'
      }
      if(type==2){
        return 'Quẹt thẻ'
      }
    }
    return '---'
  }
  filterPredicate = (staff: BILL): boolean => {
    // if (this.filterValue) {
    //   let isMatched =
    //     (!!this.filterValue?.name
    //       ? staff?.name
    //           ?.toLowerCase()
    //           .includes(this.filterValue?.name.toLowerCase())
    //       : true) &&
    //     (!!this.filterValue?.phoneNumber
    //       ? staff?.phoneNumber
    //           ?.toLowerCase()
    //           .includes(this.filterValue?.phoneNumber.toLowerCase())
    //       : true) &&
    //     (this.filterValue?.gender != null
    //       ? staff?.gender === this.filterValue?.gender
    //       : true);
    //   return isMatched;
    // }
    return true;
  };
}
