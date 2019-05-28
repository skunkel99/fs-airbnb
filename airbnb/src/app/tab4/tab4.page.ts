import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {

  constructor(
    private navCtrl: NavController
  ) {}

  navToExplore() {
    this.navCtrl.navigateForward("explore");
  }

  navToExploreCurrent() {
    this.navCtrl.navigateForward("rental-details");
  }


}
