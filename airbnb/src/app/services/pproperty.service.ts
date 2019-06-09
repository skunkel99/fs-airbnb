import { Injectable } from '@angular/core';
import { tripdetails } from '../models/tripdetails.model';

@Injectable({
  providedIn: 'root'
})
export class PpropertyService {
  public listings: Array<tripdetails> = [];

  constructor() { }

  

  // findListingByID(id: number): tripdetails {
  //   let foundListing: tripdetails = null;

  //   this.listings.forEach (
  //     (Listing:tripdetails) => {
  //       if (Listing.id == id) {
  //         foundListing = Listing;
  //       }
  //     }
  //   );
  //   return foundListing;
  // }
}
