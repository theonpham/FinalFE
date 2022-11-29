import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarCustomService } from 'src/app/shared/snackbar.service';
import { TABLE } from '../table.const';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.scss'],
})
export class TableInputComponent implements OnInit {
  selectedTable!: TABLE;
  floorOption: any;
  formGroup: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    capacity: [null, [Validators.required]],
    floor: [null, [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TableInputComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: TABLE,
    private service: TableService,
    private snackBar: SnackBarCustomService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.selectedTable = this.data;
      this.patchValue(this.selectedTable);
    }
    this.service.getAllFloorList().subscribe((data) => {
      this.floorOption = data;
    });
  }
  patchValue(table: TABLE) {
    this.formGroup.patchValue({
      name: table.name,
      capacity: table.capacity,
      floor: table.floor,
    });
  }
  onSubmit() {
    const input = this.formGroup.getRawValue();
    if (!this.selectedTable) {
      this.service.addTable(input).subscribe(
        (data) => {
          this.snackBar.openSnackBar('Created Successfully', true);
          this.onCloseSidenav();
        },
        () => {
          this.snackBar.openSnackBar('Created Failed', false);
        }
      );
    } else {
      // this.service.updateTable(this.selectedTable._id, input).subscribe(
      //   (data) => {
      //     this.snackBar.openSnackBar('Updated Successfully', true);
      //     this.onCloseSidenav();
      //   },
      //   () => {
      //     this.snackBar.openSnackBar('Update Failed', false);
      //   }
      // );
    }
  }
  onCloseSidenav() {
    this.dialogRef.close();
  }
}
