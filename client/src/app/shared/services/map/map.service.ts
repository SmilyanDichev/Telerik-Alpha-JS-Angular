import { Injectable, NgZone } from '@angular/core';
import { GoogleMapsAPIWrapper, MapsAPILoader, AgmCircle } from '@agm/core';
import { Observable, Observer } from 'rxjs/';
import { google } from '@agm/core/services/google-maps-types';

// declare var google: any;

@Injectable()
export class MapService extends GoogleMapsAPIWrapper {

  constructor ( private loader: MapsAPILoader, private zone: NgZone) {
    super(loader, zone);
  }

  getGeoLocation(address: string): Observable<any> {
    const geocoder = new google.maps.Geocode();
    return Observable.create(observer => {
      geocoder.geocode({
        'address': address,
      }, (results, status) => {
        if (status === google.maps.GeocoderStatus.Ok) {
          observer.next(results[0].geometry.location);
          observer.complete();
        } else {
          observer.error();
        }
      });
    });
  }

  getRevGeoLocation(lat: number, lng: number): Observable<google.maps.GeocoderResult> {
    if (navigator.geolocation) {
      const geocoder = new google.maps.Geocoder();
      const latlng = new google.maps.LatLng(lat, lng);
      const request = {
        latLng: latlng,
      };
      return Observable.create(observer => {
          geocoder.geocode(request, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              observer.next(results[0]);
              observer.complete();
            } else {
              observer.error();
            }
          });
      });
    }
  }

}
