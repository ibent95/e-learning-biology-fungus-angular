import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-under-construction-page',
  templateUrl: './under-construction-page.component.html',
  styleUrls: ['./under-construction-page.component.scss']
})
export class UnderConstructionPageComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  public onBackButtonClick(): void {
    this.location.back();
  }

}