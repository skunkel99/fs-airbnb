import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { tripdetails } from '../models/tripdetails.model';
import { StringMapWithRename } from '@angular/core/src/render3/jit/compiler_facade_interface';
import { PpropertyService } from '../services/pproperty.service';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public trips: Array<tripdetails> = new Array();

  constructor(
    private navCtrl: NavController, private propertyService: PpropertyService, private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {

      
    }

    ngOnInit() {
      const userId = localStorage.getItem("user_id");

      this.httpClient.get(`http://localhost:3000/users/${userId}/bookings`).subscribe((response: any) => {
            this.trips = JSON.parse(JSON.stringify(response));
            console.log(this.trips);
          })
      
  };

 



  navToDetails(rentalObj: tripdetails) {
    let navOptions: NavigationOptions = {
      queryParams: {
        q: "ionic",
        propertyId: rentalObj.id
      }
    };
    this.navCtrl.navigateForward("listing-details", navOptions);
  }

  navToExplore() {
    this.navCtrl.navigateForward("explore");
  }
  


}
