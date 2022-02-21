import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from 'src/app/models/bike/bike';
import { BikeService } from 'src/app/services/bike.service';


@Component({
  selector: 'app-addbike',
  templateUrl: './addbike.component.html',
  styleUrls: ['./addbike.component.css'],
})
export class AddbikeComponent implements OnInit {
  newBike: Bike = new Bike();

  bikeList: Bike[] = [];
  currentId: number;

  constructor(private myBikeService: BikeService, private router: Router) {}

  ngOnInit(): void {
    this.myBikeService.getAllBikes().subscribe((response) => {
      //console.log(response);
      this.bikeList = response;
    });
    this.currentId = this.myBikeService.getOption();
    
  }

  addBike() {
    this.myBikeService.addBike(this.newBike).subscribe((response) => {
      this.myBikeService.refreshBikes$.next(true);
      this.router.navigate(['profile/user/' + this.currentId + '/bike/' + (this.bikeList.length + 1)])
    });
  }
}
