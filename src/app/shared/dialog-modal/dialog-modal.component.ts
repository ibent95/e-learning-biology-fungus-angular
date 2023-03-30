import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModalType } from 'src/app/models/core';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
})
export class DialogModalComponent implements OnInit {

  title!: string;
  message!: string;
  type!: DialogModalType;
  data!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public matDialogData: {
      title: string,
      message: string,
      type: DialogModalType,
      data: any,
    },
    private dialogRef: MatDialogRef<DialogModalComponent>
  ) { }

  ngOnInit(): void {
    this.title = this.matDialogData.title;
    this.message = this.matDialogData.message;
    this.type = this.matDialogData.type;
    this.data = this.matDialogData.data;

    console.log('matDialogData', this.matDialogData);
  }

  public onChildDialogClose(data: any) {
    console.log('data', data);
  }

}