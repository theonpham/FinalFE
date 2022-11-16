import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StaffDetailComponent } from '../staff-detail/staff-detail.component';
import { STAFF } from '../staff.const';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss'],
})
export class StaffListComponent implements OnInit {
  dataSource!: MatTableDataSource<STAFF>;
  data: STAFF[] = [];
  init = false;
  displayedColumns = [
    'name',
    'phoneNumber',
    'gender',
    'createdAt',
    'updatedAt',
    'actions',
  ];
  filterValue: any;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _dialog: MatDialog, private service: StaffService) {}
  ngOnInit(): void {
    this.reload();
  }
  reload(): void {
    this.service.getAllStaffList().subscribe((data) => {
      this.init = true;
      this.data = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'name':
            return item.name;
          case 'phoneNumber':
            return item.phoneNumber;
          case 'gender':
            return item.gender;
          case 'createdAt':
            return item.createdAt;
          case 'updatedAt':
            return item.updatedAt;
          default:
            // @ts-ignore
            return item[property];
        }
      };
      this.dataSource.filterPredicate = this.filterPredicate;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.reloadFilter();
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
  openDetail(row: STAFF) {
    const dialogRef = this._dialog.open(StaffDetailComponent, {
      width: '1200px',
      height: '800px',
      data: row,
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
  filterPredicate = (staff: STAFF): boolean => {
    if (this.filterValue) {
      let isMatched =
        (!!this.filterValue?.name
          ? staff?.name
              ?.toLowerCase()
              .includes(this.filterValue?.name.toLowerCase())
          : true) &&
        (!!this.filterValue?.phoneNumber
          ? staff?.phoneNumber
              ?.toLowerCase()
              .includes(this.filterValue?.phoneNumber.toLowerCase())
          : true) &&
        (this.filterValue?.gender != null
          ? staff?.gender === this.filterValue?.gender
          : true);
      return isMatched;
    }
    return true;
  };
}
