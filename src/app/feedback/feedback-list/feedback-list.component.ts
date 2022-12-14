import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FEEDBACK } from '../feedback.const';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss'],
})
export class FeedbackListComponent implements OnInit {
  dataSource!: MatTableDataSource<FEEDBACK>;
  data: FEEDBACK[] = [];
  init = false;
  displayedColumns = [
    'status',
    'title',
    'content',
    'table',
    'staff',
    'date',
    'time',
  ];
  filterValue: any;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service: FeedbackService) {}

  ngOnInit(): void {
    this.reload();
  }
  reload(): void {
    this.service.getAllFeedBackList().subscribe((data) => {
      this.init = true;
      this.data = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'status':
            return item.status;
          case 'title':
            return item.title;
          case 'content':
            return item.content;
          case 'table':
            return item.table.name;
          case 'staff':
            return item.staff.name;
          case 'date':
            return item.date;
          case 'time':
            return item.time;
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
  filterPredicate = (feedback: FEEDBACK): boolean => {
    if (this.filterValue) {
      let isMatched =
        (this.filterValue?.status != null
          ? feedback?.status == this.filterValue?.status
          : true) &&
        (this.filterValue?.title != null
          ? feedback?.title == this.filterValue?.title
          : true) &&
        (this.filterValue?.staff
          ? feedback?.staff.name
              .toLocaleLowerCase()
              .includes(this.filterValue?.staff.toLowerCase())
          : true);
      return isMatched;
    }
    return true;
  };
  renderStatus(status: any) {
    if (status == '0') {
      return 'R???t kh??ng h??i l??ng';
    } else if (status == '1') {
      return 'Kh??ng h??i l??ng';
    } else if (status == '2') {
      return 'B??nh th?????ng';
    } else if (status == '3') {
      return 'H??i l??ng';
    } else if (status == '4') {
      return 'R???t h??i l??ng';
    }
    return '---';
  }
  renderTitle(status: any) {
    if (status == '0') {
      return 'Ph???n h???i x???u';
    } else if (status == '1') {
      return 'M???t s??? v???n ????? ch??a t???t';
    } else if (status == '2') {
      return 'Ho??n h???o';
    }
    return '---';
  }
}
