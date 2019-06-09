import { Component, OnInit } from '@angular/core';

import {tripdetails } from '../models/tripdetails.model';
import {PpropertyService} from '../services/pproperty.service';
import { NavController } from '@ionic/angular';
import { rental } from '../models/rental.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.page.html',
  styleUrls: ['./listing-details.page.scss'],
})
export class ListingDetailsPage implements OnInit {
  private listingID: number;
  public destination: string;
  public currentListing: tripdetails;
  public houseName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PpropertyService,
    private navCtrl: NavController
  ) { 
    // this.propertyService.getAllTrips();
  }

  ngOnInit() {

    let arrow = (data: any) => {
      this.listingID = data.params.propertyId;
      // this.currentListing = this.propertyService.findListingByID(this.listingID);

      if (!this.currentListing) {
        alert("Property not found!") ;
        this.navCtrl.navigateBack("");
      }

    };
    this.activatedRoute.queryParamMap.subscribe(arrow);
  }

}
