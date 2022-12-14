import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarCustomService } from 'src/app/shared/snackbar.service';
import { TableService } from 'src/app/table/table.service';
import { STAFF } from '../staff.const';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-input',
  templateUrl: './staff-input.component.html',
  styleUrls: ['./staff-input.component.scss'],
})
export class StaffInputComponent implements OnInit {
  selectedStaff!: STAFF;
  floorOption: any[] = []
  formGroup: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required]],
    gender: [null, [Validators.required]],
    role: [null, [Validators.required]],
    floor: [null, [Validators.required]],
    account: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StaffInputComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: STAFF,
    private service: StaffService,
    private snackBar: SnackBarCustomService,
    private tableService : TableService,
  ) {}

  ngOnInit(): void {
    this.tableService.getAllFloorList().subscribe((data)=>{
      this.floorOption = data
      if (this.data) {
        this.selectedStaff = this.data;
        this.patchValue(this.selectedStaff);
      }
    })

  }
  patchValue(staff: STAFF) {
    this.formGroup.patchValue({
      name: staff.name,
      phoneNumber: staff.phoneNumber,
      gender: staff.gender,
      role: staff.role,
      floor: staff.floor,
      account: staff.account,
      password: staff.password,
    });
  }
  onSubmit() {
    let input = this.formGroup.getRawValue();
    input.gender ? (input.gender = Number.parseInt(input.gender)) : null;
    input.role ? (input.role = Number.parseInt(input.role)) : null;
    // input.numberFloor
    //   ? (input.numberFloor = Number.parseInt(input.numberFloor))
    //   : null;
    console.log(input);
    if (!this.selectedStaff) {
      this.service.addStaff(input).subscribe(
        (data) => {
          this.snackBar.openSnackBar('Created Successfully', true);
          this.service.reloadTableList('Create');
          this.onCloseSidenav();
        },
        () => {
          this.snackBar.openSnackBar('Created Failed', false);
        }
      );
    } else {
      this.service.updateStaff(this.selectedStaff._id, input).subscribe(
        (data) => {
          this.snackBar.openSnackBar('Updated Successfully', true);
          this.service.reloadTableList('Update');
          this.onCloseSidenav();
        },
        () => {
          this.snackBar.openSnackBar('Update Failed', false);
        }
      );
    }
  }
  onCloseSidenav() {
    this.dialogRef.close();
  }
}
