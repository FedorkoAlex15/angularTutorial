import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../models/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  fullUser: User;

  constructor(private router: Router) {
    // this.fullUser = this.router.getCurrentNavigation()?.extras.state as User;

   this.fullUser =  this.router.getCurrentNavigation()?.extras.state as User;
  }

  ngOnInit(): void {
  }

}
