import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-comming-soon-page',
  templateUrl: './comming-soon-page.component.html',
  styleUrls: ['./comming-soon-page.component.scss']
})
export class CommingSoonPageComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  public onBackButtonClick(): void {
    this.location.back();
  }

}