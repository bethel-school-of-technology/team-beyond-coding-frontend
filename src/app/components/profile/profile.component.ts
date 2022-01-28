import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  faUserCircle = faUserCircle;
  faUsersCog = faUsersCog;

  UserName = "Username"
  UserId = "00"
  FullName = 'Placeholder';
  City = 'Placeholder';
  State = 'Placeholder';
  Birthday = '12/3456';
  Email = 'Placeholder';

  constructor() {}

  ngOnInit(): void {}
}