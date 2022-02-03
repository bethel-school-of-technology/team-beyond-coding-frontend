import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bike } from 'src/app/models/bike/bike';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-viewbike',
  templateUrl: './viewbike.component.html',
  styleUrls: ['./viewbike.component.css'],
})
export class ViewbikeComponent implements OnInit {
  currentBike: Bike = new Bike();

  bikeID: number;

  constructor(
    private actRoute: ActivatedRoute,
    private myBikeService: BikeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.bikeID = +params["bikeID"];

    this.myBikeService.getOneBike(this.bikeID).subscribe((response) => {
      this.currentBike = response;
    });
   })
  }
  deleteBike(id: number){
    this.myBikeService.deleteBike(id).subscribe(response => {
      this.myBikeService.refreshBikes$.next(true);
      this.router.navigate(["profile/addbike"])
    })
  }
  navigateTo(){
    this.router.navigate(['profile/update/bike/' + this.bikeID])
  }
}
