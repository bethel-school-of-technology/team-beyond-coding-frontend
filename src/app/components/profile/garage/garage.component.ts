import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

import { Bike } from 'src/app/models/bike/bike';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css'],
})
export class GarageComponent implements OnInit {
  faMotorcycle = faMotorcycle;

  bikeList: Bike[] = [];

  constructor(private myBikeService: BikeService, private router: Router) {}

  ngOnInit(): void {
    this.myBikeService.getAllBikes().subscribe((response) => {
      console.log(response);
      this.bikeList = response;
    });
  }
  id: any = 'tab';
  tabChange(ids: any) {
    this.id = ids;
    console.log(this.id);
  }
}
