import { Injectable } from '@angular/core';
import {
  MatSnackBarRef,
  SimpleSnackBar,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackBarCustomService {
  snackBarRef: MatSnackBarRef<SimpleSnackBar> | undefined;
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, success: boolean) {
    if (!success) {
      this.snackBarRef = this._snackBar.open(message, 'X', {
        duration: 6000,
        panelClass: ['fail-snackbar'],
      });
    } else {
      this.snackBarRef = this._snackBar.open(message, 'X', {
        duration: 6000,
        panelClass: ['success-snackbar'],
      });
    }
  }
}
