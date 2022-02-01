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

  @Output('pageRefresh') pageRefresh: EventEmitter<any> = new EventEmitter();

  constructor(private myBikeService: BikeService, private router: Router) {}

  ngOnInit(): void {
    this.myBikeService.getAllBikes().subscribe((response) => {
      console.log(response);
      this.bikeList = response;
    });
  }

  addBike() {
    this.myBikeService.addBike(this.newBike).subscribe((response) => {
      this.router.navigate(['profile/bike/' + (this.bikeList.length + 1)])
    });
  }

  info() {
    console.log(this.bikeList.length + 1);
  }
}
