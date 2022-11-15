import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarCustomService } from 'src/app/shared/snackbar.service';
import { STAFF } from '../staff.const';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-input',
  templateUrl: './staff-input.component.html',
  styleUrls: ['./staff-input.component.scss'],
})
export class StaffInputComponent implements OnInit {
  selectedStaff!: STAFF;
  formGroup: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required]],
    gender: [null, [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StaffInputComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: STAFF,
    private service: StaffService,
    private snackBar: SnackBarCustomService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.selectedStaff = this.data;
      this.patchValue(this.selectedStaff);
    }
  }
  patchValue(staff: STAFF) {
    this.formGroup.patchValue({
      name: staff.name,
      phoneNumber: staff.phoneNumber,
      gender: staff.gender,
    });
  }
  onSubmit() {
    let input = this.formGroup.getRawValue();
    input.gender ? (input.gender = Number.parseInt(input.gender)) : null;
    if (!this.selectedStaff) {
      this.service.addStaff(input).subscribe(
        (data) => {
          this.snackBar.openSnackBar('Created Successfully', true);
          this.onCloseSidenav();
        },
        () => {
          this.snackBar.openSnackBar('Created Failed', false);
        }
      );
    } else {
      // this.service.updateFood(this.selectedStaff._id, input).subscribe(
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
