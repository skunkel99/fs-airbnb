import { Injectable } from '@angular/core';
import { rental } from '../models/rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  public rentals: Array<rental> = [];

  constructor(private httpClient: HttpClient) { }

  getAllRentals() {
    this.httpClient.get("http://localhost:3000/properties/allproperties").subscribe((response) => {
      this.rentals = JSON.parse(JSON.stringify(response));
    })
  }

  findRentalById( id: number): rental {
    let foundRental: rental = null;
    this.rentals.forEach(
      (Rental:rental) => {
        if (Rental.id == id) {
          foundRental = Rental;
        }
      })
    return foundRental;
  }
}
