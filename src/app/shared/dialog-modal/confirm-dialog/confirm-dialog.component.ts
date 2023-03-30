import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Required } from 'src/app/services/core.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  inputs: ['title', 'message'],
})
export class ConfirmDialogComponent implements OnInit {

  @Required() title!: string;
  @Required() message!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
