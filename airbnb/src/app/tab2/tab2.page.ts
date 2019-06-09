import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public user: User = new User();

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {

    const userId = localStorage.getItem("user_id");
    this.http.get(`http://localhost:3000/users/${userId}`).subscribe((response: User )=> {
          this.user.name = response[0].name;
          this.user.email = response[0].email;
          this.user.id = response[0].id;
      }
  
    )};
}
