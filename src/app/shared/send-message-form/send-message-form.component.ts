import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogModalType } from 'src/app/models/core';
import { MyErrorStateMatcher } from 'src/app/services/core.service';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.scss']
})
export class SendMessageFormComponent implements OnInit {

  messageForm!: FormGroup;
  messageFormMatcher!: MyErrorStateMatcher;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.messageForm = new FormGroup({});
    this.messageFormMatcher = new MyErrorStateMatcher();

    this.doInitiateForm();
  }

  private doInitiateForm(): void {
    this.messageForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  public onSubmitBtnClick(): void {
    let data = {
      title: 'Apakah anda yakin?',
      message: 'Pastikan anda telah mengisi data dengan lengkap.',
      type: DialogModalType.INFO,
      data: this.messageForm.getRawValue()
    };

    const dialogOptions: MatDialogConfig = {
      width: '250px',
      data: data,
    };

    this.dialog.open(DialogModalComponent, dialogOptions);
  }

}