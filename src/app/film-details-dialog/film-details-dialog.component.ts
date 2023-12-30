// film-details-dialog.component.ts

import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Location} from "@angular/common";

@Component({
  selector: 'app-film-details-dialog',
  templateUrl: 'film-details-dialog.component.html',
})
export class FilmDetailsDialogComponent {
  constructor(    public dialogRef: MatDialogRef<FilmDetailsDialogComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: any,
                  private location: Location) {}

  onCloseClick(): void {
    this.dialogRef.close();
    this.location.back();
  }
}
