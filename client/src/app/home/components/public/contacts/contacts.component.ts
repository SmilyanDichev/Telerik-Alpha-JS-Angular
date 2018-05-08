import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../../core/contact/contact.service';
import { MapService } from '../../../../shared/services/map/map.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  private lat: number ;
  private lng: number ;
  private zoom: number = 18;
  private address: string  = 'Sofia';
  private contacts: any[];

  constructor(
    private loader: MapsAPILoader,
    private mapService: MapService,
    private contactService: ContactService) { }

  public ngOnInit(): void {
    this.getAllContacts();
   
  }

  private getMainAdress(address: string): void {
    this.mapService.geocodeAddress(address).subscribe((res) => {
      this.lat = res.lat;
      this.lng = res.lng;
    });
  }

  private getAllContacts(): void {
    this.contactService.getContacts().subscribe((res) => {
      this.address = res.find((el) => {
        if (el.isMapAddress === true) {
          
          return el.value;
        }
      }).value;
      console.log('this.address',this.address);
      
      this.getMainAdress(this.address);
      this.contacts = res;
    });
  }

}
