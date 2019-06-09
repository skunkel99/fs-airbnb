import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
 import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { RentalService } from '../services/rental.service';

import { rental } from '../models/rental.model';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

public rentals: Array<rental> = new Array();
public Rental: rental = new rental();


  constructor(private navCtrl: NavController, private propertyService: RentalService, private httpClient: HttpClient) {
    this.httpClient.get("http://localhost:3000/properties/allproperties").subscribe((response) => {
      this.rentals = JSON.parse(JSON.stringify(response));
      for( var k = 0; k < this.rentals.length; k++) {
        this.rentals[0].imageUrl = response[0].imageUrl;
        this.rentals[0].houseName = response[0].houseName;
        this.rentals[0].hostName = response[0].hostName;
        this.rentals[0].location = response[0].location;
      }
    })
  }

  navToDetails(rentalObj: rental) {
    let navOptions: NavigationOptions = {
      queryParams: {
        q: "ionic",
        propertyID: rentalObj.id
       }
      };
       this.navCtrl.navigateForward("rental-details", navOptions);
  }

}
