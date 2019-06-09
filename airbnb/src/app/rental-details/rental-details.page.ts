import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { rental } from '../models/rental.model';
import { booking } from '../models/booking.model';
import { RentalService } from '../services/rental.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';




@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {
  private propertyId: number;
  public destination: string;
  public currentProperty: rental;
  public houseName: string;


  public Booking: booking = new booking();

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: RentalService,
    private navCtrl: NavController, private httpClient: HttpClient
  ) {
    this.propertyService.getAllRentals();
  }

  


  ngOnInit() {
    let arrow = (data: any) => {
      this.propertyId = data.params.propertyID;
      var id = this.propertyId;

      this.httpClient.get(`http://localhost:3000/properties/${id}`).subscribe((response: any) => {
        this.currentProperty = response[0];
        if (this.currentProperty == null) {
          alert("Property not found!");
          this.navCtrl.navigateBack("");
        }
      })
    };
    this.activatedRoute.queryParamMap.subscribe(arrow);
  }


navToBooking() {
  const propertyId = this.propertyId;
  const stringProperty = "" + propertyId;
  localStorage.setItem("property_id", stringProperty);
  this.navCtrl.navigateForward("booking");
}
}