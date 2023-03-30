import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Required } from 'src/app/services/core.service';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
  inputs: ['title', 'message'],
})
export class AlertDialogComponent implements OnInit {

  @Required() title!: string;
  @Required() message!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
