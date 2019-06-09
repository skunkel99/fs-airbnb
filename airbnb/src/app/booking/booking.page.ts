import { Component, OnInit } from '@angular/core';
import { booking } from '../models/booking.model';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  public propertyID = 0;


  public Booking: booking = new booking();

  ngOnInit() {
    
  
  }


  constructor(private httpClient: HttpClient, private navCtrl: NavController, private activatedRoute: ActivatedRoute) { 
    var userID = localStorage.getItem("user_id");
    const numberUserId = parseInt(userID);
    this.Booking.userId = numberUserId;
    this.Booking.status = "NEW";
    this.Booking.propertyId = parseInt(localStorage.getItem("property_id"));
    
    
  }

  submit() {
    console.log("Submitting to the server...");
    console.log(this.Booking);

  
    this.httpClient
      .post("http://localhost:3000/bookings", this.Booking)
      .subscribe(
        (response) => {
        }
      );
  }



}
