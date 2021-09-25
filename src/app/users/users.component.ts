import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServicesService} from "../services.service";
import {User} from "../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: User[]

  constructor(private userService: ServicesService) {}

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(value => this.users = value )
  }

}
