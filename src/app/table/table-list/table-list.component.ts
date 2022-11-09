import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  displayedColumns = [];
  data = [];
  dataSource!: MatTableDataSource<any>;
  init = false;

  constructor(private service: TableService) {}

  ngOnInit(): void {}
}
