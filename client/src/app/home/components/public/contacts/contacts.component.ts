import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { MapService } from '../../../../shared/services/map/map.service';
import { google } from '@agm/core/services/google-maps-types';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number ;
  lng: number ;
  zoom: number = 18;
  address: string  = 'bul. "Aleksandar Malinov" 31, 1729 g.k. Mladost 1A, Sofia';

  // constructor(private loader: MapsAPILoader, private zone: NgZone, private mapService: MapService) { }
  constructor(
    private loader: MapsAPILoader,
    // private zone: NgZone,
    private mapService: MapService) { }

  ngOnInit() {
    this.mapService.geocodeAddress(this.address).subscribe((res) => {
      console.log(res);
      this.lat = res.lat;
      this.lng = res.lng;
    });
    // this.mapService.getGeoLocation(this.address).subscribe((res) => {
    //   console.log(res);
    // });
  }

}
