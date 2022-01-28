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
  @Output() numberEvent = new EventEmitter<number>();

  constructor(
    private actRoute: ActivatedRoute,
    private myBikeService: BikeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bikeID = parseInt(this.actRoute.snapshot.paramMap.get('bikeID'));

    this.myBikeService.getOneBike(this.bikeID).subscribe((response) => {
      this.currentBike = response;
    });
  }
  sendNumber() {
    this.numberEvent.emit(this.bikeID)
  }
}
