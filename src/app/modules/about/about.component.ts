import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title!: string;
  subTitle!: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Tentang';
    this.subTitle = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
  }

}
