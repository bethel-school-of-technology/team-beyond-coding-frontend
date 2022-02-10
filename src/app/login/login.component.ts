import { Component, OnInit } from '@angular/core';
import { User } from '../models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  getUser: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  User() {}

}
