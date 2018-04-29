import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 14;
  constructor() { }

  ngOnInit() {
  }

}
