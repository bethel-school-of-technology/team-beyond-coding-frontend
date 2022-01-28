import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


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
  bikeID: any;
  

  constructor(
    private actRoute: ActivatedRoute,
    private myBikeService: BikeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myBikeService.getAllBikes().subscribe((response) => {
      console.log(response);
      this.bikeList = response;
    });
    this.actRoute.firstChild.params.subscribe((response) => {
      console.log(response)});
      

  }


  Reload() {
    console.log(this.bikeID)
    this.router.navigate(['/garage/bike/', this.bikeID]);
  }
}
