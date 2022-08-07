import { Component, OnInit } from '@angular/core';
import { PriceListResource, SlideShowImageResource } from 'src/app/models/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title!: string;
  imageResources!: Array<SlideShowImageResource>;
  priceListResources!: Array<PriceListResource>;

  constructor() { }

  ngOnInit(): void {
    this.title = environment.app_title;

    this.imageResources = [
      {
        url: 'assets/img/img_lights_wide.jpg',
        caption: 'Caption 1'
      },
      {
        url: 'assets/img/img_mountains_wide.jpg',
        caption: 'Caption 2'
      },
      {
        url: 'assets/img/img_nature_wide.jpg',
        caption: 'Caption 3'
      },
      {
        url: 'assets/img/img_snow_wide.jpg',
        caption: 'Caption 4'
      },
    ];

    this.priceListResources = [
      {
        title: 'Bronze',
        subtitle: 'Lorem ipsum dolor sit amet',
        price: 95000,
        items: [
          {
            checklist: true,
            description: 'Interdum et malesuada'
          },
          {
            checklist: true,
            description: 'Maecenas sem libero'
          },
          {
            checklist: false,
            description: 'Vivamus ultricies'
          },
          {
            checklist: false,
            description: 'Vestibulum sed velit'
          },
          {
            checklist: false,
            description: 'Nullam nec arcu tortor'
          },
          {
            checklist: false,
            description: 'Pellentesque congue'
          },
        ]
      },
      {
        title: 'Silver',
        subtitle: 'Lorem ipsum dolor sit amet',
        price: 150000,
        items: [
          {
            checklist: true,
            description: 'Interdum et malesuada'
          },
          {
            checklist: true,
            description: 'Maecenas sem libero'
          },
          {
            checklist: true,
            description: 'Vivamus ultricies'
          },
          {
            checklist: false,
            description: 'Vestibulum sed velit'
          },
          {
            checklist: false,
            description: 'Nullam nec arcu tortor'
          },
          {
            checklist: false,
            description: 'Pellentesque congue'
          },
        ]
      },
      {
        title: 'Gold',
        subtitle: 'Lorem ipsum dolor sit amet',
        price: 270000,
        items: [
          {
            checklist: true,
            description: 'Interdum et malesuada'
          },
          {
            checklist: true,
            description: 'Maecenas sem libero'
          },
          {
            checklist: true,
            description: 'Vivamus ultricies'
          },
          {
            checklist: true,
            description: 'Vestibulum sed velit'
          },
          {
            checklist: false,
            description: 'Nullam nec arcu tortor'
          },
          {
            checklist: false,
            description: 'Pellentesque congue'
          },
        ]
      },
      {
        title: 'Diamond',
        subtitle: 'Lorem ipsum dolor sit amet',
        price: 450000,
        items: [
          {
            checklist: true,
            description: 'Interdum et malesuada'
          },
          {
            checklist: true,
            description: 'Maecenas sem libero'
          },
          {
            checklist: true,
            description: 'Vivamus ultricies'
          },
          {
            checklist: true,
            description: 'Vestibulum sed velit'
          },
          {
            checklist: true,
            description: 'Nullam nec arcu tortor'
          },
          {
            checklist: true,
            description: 'Pellentesque congue'
          },
        ]
      },
    ];
  }

}