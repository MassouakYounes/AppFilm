import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Location} from "@angular/common";

@Component({
  selector: 'app-serie-details-dialog',
  templateUrl: './serie-details-dialog.component.html',
  styleUrls: ['./serie-details-dialog.component.css']
})
export class SerieDetailsDialogComponent {

  constructor(    public dialogRef: MatDialogRef<SerieDetailsDialogComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: any,
                  private location: Location) {}

  onCloseClick(): void {
    this.dialogRef.close();
    this.location.back();
  }

}
