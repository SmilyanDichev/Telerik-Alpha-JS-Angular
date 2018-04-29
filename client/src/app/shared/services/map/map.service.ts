// import { Injectable, NgZone } from '@angular/core';
// import { GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';
// import { Observable, Observer } from 'rxjs/';
// // import {  } from '@types/googlemaps';
//  import { google } from '@agm/core/services/google-maps-types';
 
// // import {  } from 'googlemaps';
// // declare var google: any;





// @Injectable()
// export class MapService extends GoogleMapsAPIWrapper {

//   constructor ( private loader: MapsAPILoader, private zone: NgZone) {
//     super(loader, zone);
//   }



// }

import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { filter, catchError, tap, map, switchMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import {} from '@types/googlemaps';

declare var google: any;

@Injectable()
export class MapService {
  private geocoder: any;

  constructor(private mapLoader: MapsAPILoader) {}

  private initGeocoder() {
    console.log('Init geocoder!');
    this.geocoder = new google.maps.Geocoder();
  }

  private waitForMapsToLoad(): Observable<boolean> {
    if (!this.geocoder) {
      return fromPromise(this.mapLoader.load())
      .pipe(
        tap(() => this.initGeocoder()),
        map(() => true)
      );
    }
    return of(true);
  }

  geocodeAddress(location: string): Observable<any> {
    console.log('Start geocoding!');
    return this.waitForMapsToLoad().pipe(
      // filter(loaded => loaded),
      switchMap(() => {
        return new Observable(observer => {
          this.geocoder.geocode({'address': location}, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              console.log('Geocoding complete!');
              observer.next({
                lat: results[0].geometry.location.lat(), 
                lng: results[0].geometry.location.lng()
              });
            } else {
                console.log('Error - ', results, ' & Status - ', status);
                observer.next({});
            }
            observer.complete();
          });
        });
      })
    );
  }

  // getGeoLocation(address: string): Observable<any> {
  //   const geocoder = new google.maps.Geocoder();
  //   return Observable.create(observer => {
  //     geocoder.geocode({
  //       'address': address,
  //     }, (results, status) => {
  //       if (status === google.maps.GeocoderStatus.OK) {
  //         observer.next(results[0].geometry.location);
  //         observer.complete();
  //       } else {
  //         observer.error();
  //       }
  //     });
  //   });
  // }

  // getRevGeoLocation(lat: number, lng: number): Observable<google.maps.GeocoderResult> {
  //   if (navigator.geolocation) {
  //     const geocoder = new google.maps.Geocoder();
  //     const latlng = new google.maps.LatLng(lat, lng);
  //     const request = {
  //       latLng: latlng,
  //     };
  //     return Observable.create(observer => {
  //         geocoder.geocode(request, (results, status) => {
  //           if (status === google.maps.GeocoderStatus.OK) {
  //             observer.next(results[0]);
  //             observer.complete();
  //           } else {
  //             observer.error();
  //           }
  //         });
  //     });
  //   }
  // }

}