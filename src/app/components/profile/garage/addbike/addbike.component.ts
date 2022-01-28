import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from 'src/app/models/bike/bike';
import { BikeService } from 'src/app/services/bike.service';


@Component({
  selector: 'app-addbike',
  templateUrl: './addbike.component.html',
  styleUrls: ['./addbike.component.css'],
})
export class AddbikeComponent implements OnInit {
  
  newBike: Bike = new Bike()

  constructor(private myBikeService: BikeService, private router: Router) {}

  ngOnInit(): void {}

  addBike(){
    this.myBikeService.addBike(this.newBike).subscribe(response => {
      this.router.navigate(['profile']);
    })
  }
}
