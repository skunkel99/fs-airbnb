import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  public user: User = new User();

  constructor(
    private navCtrl: NavController,  private httpClient: HttpClient
  ) {}
  
  submit() {
    this.httpClient.post("http://localhost:3000/users/authentication", this.user).subscribe((response :any) => {

    const userId = response.id;
    localStorage.setItem("user_id", userId);

     if (response == Error) {
       console.log("Incorrect password");
     }
     else { 
      this.navCtrl.navigateForward("tabs", {
        // queryParams: {
        //   user_id: response.id
        // }
      });
     }
    });
  }

  navToRegister() {
    this.navCtrl.navigateForward("register");
  }
}

