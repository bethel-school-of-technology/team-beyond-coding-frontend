import { Component, OnInit } from '@angular/core';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

import { Bike } from 'src/app/models/bike/bike';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css'],
})
export class GarageComponent implements OnInit {
  faMotorcycle = faMotorcycle;

  Id: number = 0;
  Make: any = 'placeholder';
  Model: any = 'placeholder';
  TopSpeed: any = 'placeholder';
  Engine: any = 'placeholder';

  newBike: Bike = new Bike()
  constructor() {}

  ngOnInit(): void {}

  addBike(){
    this
  }
}
