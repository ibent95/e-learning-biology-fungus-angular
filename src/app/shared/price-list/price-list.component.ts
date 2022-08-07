import { Component, OnInit } from '@angular/core';
import { PriceListResource } from 'src/app/models/core';
import { Required } from 'src/app/services/core.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
  inputs: ['priceListResources']
})
export class PriceListComponent implements OnInit {

  @Required() priceListResources!: Array<PriceListResource>;

  constructor() { }

  ngOnInit(): void {
  }

}
