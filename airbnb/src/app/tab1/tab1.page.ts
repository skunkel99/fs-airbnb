import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { rental } from '../models/rental.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public rentals: Array<rental> = new Array();




  constructor(private navCtrl: NavController) {
    let rental1 = new rental();
    rental1.destination = "Nashville, Tennessee";
    rental1.nightprice = 50;
    rental1.hostname = "Danny Davito";
    rental1.housename = "Southern Ranch";
    rental1.imgurl = "https://scontent.fopo2-2.fna.fbcdn.net/v/t31.0-8/19956042_10155387304412508_1960536314481010818_o.jpg?_nc_cat=110&_nc_ht=scontent.fopo2-2.fna&oh=6e160c1b5b119ebcc24c33b4aabb0fb5&oe=5D9ADAA1";
    this.rentals.push(rental1);

  }

  navToDetails() {
    this.navCtrl.navigateForward("listing-details");
  }

}
