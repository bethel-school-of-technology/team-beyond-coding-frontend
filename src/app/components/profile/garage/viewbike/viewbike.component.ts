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
  currentId: number;

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
   this.currentId = this.myBikeService.getOption();
   console.log(this.currentId)
  }
  deleteBike(id: number){
    this.myBikeService.deleteBike(id).subscribe(response => {
      this.myBikeService.refreshBikes$.next(true);
      this.currentId = this.myBikeService.getOption();
      this.router.navigate(["profile/user/" + this.currentId])
    })
    console.log(this.currentId)
  }
  navigateTo(){
    //this.router.navigate(['profile/user/'+ this.currentId +'/update/bike/' + this.bikeID])
    //this.currentId = this.myBikeService.getOption();
    console.log(this.currentId)
  }
}
