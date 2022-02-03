import { Component, OnInit } from '@angular/core';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faIdBadge = faIdBadge;
  faCalendarAlt = faCalendarAlt;
  faImages = faImages;
  faHandshake = faHandshake;

  constructor() { }

  ngOnInit(): void {
  }

}
