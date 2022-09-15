import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Required } from 'src/app/services/core.service';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
  inputs: ['title', 'message'],
})
export class InfoDialogComponent implements OnInit {

  @Required() title!: string;
  @Required() message!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
