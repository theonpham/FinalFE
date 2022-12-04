import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TABLE } from '../table.const';
import { TableService } from '../table.service';
import { getFoodListURL } from '../../food/food.const';
import { TableDetailComponent } from '../table-detail/table-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  data: TABLE[] = [];
  filteredData: TABLE[] = [];
  init = false;
  constructor(private service: TableService, private _dialog: MatDialog) {}

  ngOnInit(): void {
    this.reload();
    this.service.filterValue$.subscribe((data) => {
      this.filterPredicate(data);
    });
  }
  reload() {
    this.init = false;
    this.service.getAllTableList().subscribe((data) => {
      this.data = data;
      this.filteredData = this.data;
      this.init = true;
    });
  }
  filterPredicate(value: any) {
    if (value != null && !!this.data) {
      this.filteredData = this.data.filter((table) => {
        let match = true;
        if (!!value?.name) {
          match =
            match &&
            table.name.toLowerCase().includes(value?.name.toLowerCase());
        }
        if (!!value?.status) {
          match = match && table.status === value.status;
        }
        if (!!value?.floor) {
          match = match && table.floor == value.floor;
        }
        return match;
      });
    }
    return true;
  }
  openDetail(row: TABLE) {
    const dialogRef = this._dialog.open(TableDetailComponent, {
      width: '550px',
      data: row,
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
}
