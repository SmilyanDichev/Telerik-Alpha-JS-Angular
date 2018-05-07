import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../../core/contact/contact.service';
import { MapService } from '../../../../shared/services/map/map.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private title: string = 'My first AGM project';
  private lat: number ;
  private lng: number ;
  private zoom: number = 18;
  private address: string  = 'bul. "Aleksandar Malinov" 31, 1729 g.k. Mladost 1A, Sofia';
  private contacts: any[];

  constructor(
    private loader: MapsAPILoader,
    private mapService: MapService,
    private contactService: ContactService) { }

  public ngOnInit(): void {
    this.getMainAdress(this.address);
    this.getAllContacts();
  }

  private getMainAdress(address: string): void {
    this.mapService.geocodeAddress(address).subscribe((res) => {
      this.lat = res.lat;
      this.lng = res.lng;
    });
  }

  private getAllContacts(): void {
    console.log('getAllContacts');
    this.contactService.getContacts().subscribe((res) => {
      this.contacts = res;
    });
  }

}
