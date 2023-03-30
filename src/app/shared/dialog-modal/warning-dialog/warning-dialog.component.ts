import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Required } from 'src/app/services/core.service';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss'],
  inputs: ['title', 'message'],
})
export class WarningDialogComponent implements OnInit {

  @Required() title!: string;
  @Required() message!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
