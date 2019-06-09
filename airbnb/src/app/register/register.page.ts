import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: User = new User();

  constructor(private navCtrl: NavController,  private httpClient: HttpClient) { 

    
  }

  submit() {
    console.log("Submitting to the server...");
    console.log(this.user);

    this.httpClient
      .post("http://localhost:3000/users", this.user)
      .subscribe(
        (response : any) => {
          console.log(response);
          if (response == Error) {
            console.log("Account with email already exists");
          }
          else {
            const userId = response.id;
            localStorage.setItem("user_id", userId);
            this.navCtrl.navigateForward("tabs");
          }
        }
      );
  }

  navToProfile() {
    this.navCtrl.navigateForward("tabs");
  }

  navToLogin() {
    this.navCtrl.navigateForward("");
  }
  ngOnInit() {
  }

}
