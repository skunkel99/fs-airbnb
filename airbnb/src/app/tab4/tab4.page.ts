import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { tripdetails } from '../models/tripdetails.model';
import { StringMapWithRename } from '@angular/core/src/render3/jit/compiler_facade_interface';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {

  public trips: Array<tripdetails> = new Array();



  constructor(
    private navCtrl: NavController
  ) {
    let trip1 = new tripdetails();
    trip1.setDestination("Lisbon, Portugal")
    trip1.totalprice = 500;
    trip1.nights = 5;
    trip1.setReview("This place has a really nice vibe and was very clean!");
    trip1.setHostName("Sylvia Vasquez");
    trip1.setHouseName("Beach Villa");
    trip1.imgurl = "https://scontent.fopo2-2.fna.fbcdn.net/v/t31.0-8/16602279_10154868777391605_7923692433049369094_o.jpg?_nc_cat=104&_nc_ht=scontent.fopo2-2.fna&oh=ac166774cb7363dee81cbd273fc21fc2&oe=5D5E8B10";

    let trip2 = new tripdetails();
    trip2.setDestination("Cape Town, South Africa")
    trip2.totalprice = 350;
    trip2.nights = 2;
    trip2.setReview("This place has a really nice vibe and was very clean!");
    trip2.setHostName("Sylvia Vasquez");
    trip2.setHouseName("Beach Villa");
    trip2.imgurl = "https://scontent.fopo2-1.fna.fbcdn.net/v/t31.0-8/922080_514399005263690_702125591_o.jpg?_nc_cat=103&_nc_ht=scontent.fopo2-1.fna&oh=cdd436b5adee4400c62340743c3eb5c0&oe=5D9FBE89";

    this.trips.push(trip1);
    this.trips.push(trip2);
  }


  navToDetails(rental: string) {
    this.navCtrl.navigateForward("rental-details");
  }

  navToExplore() {
    this.navCtrl.navigateForward("explore");
  }
  


}
