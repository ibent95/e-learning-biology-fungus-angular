import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  title!: string;
  subTitle!: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Kontak';
    this.subTitle = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
  }

}
