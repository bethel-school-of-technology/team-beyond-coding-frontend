import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bike } from 'src/app/models/bike/bike';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-updatebike',
  templateUrl: './updatebike.component.html',
  styleUrls: ['./updatebike.component.css'],
})
export class UpdatebikeComponent implements OnInit {
  
  editBike: Bike = new Bike();

  bikeID: number;

  constructor(
    private actRoute: ActivatedRoute,
    private myBikeService: BikeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((params) => {
      this.bikeID = +params['bikeID'];
    this.myBikeService.getOneBike(this.bikeID).subscribe((response) => {
      
      this.editBike = response;
      });
    });
  }
  updateBike(){
    this.myBikeService.updateBike(this.bikeID, this.editBike).subscribe(response =>{
      this.myBikeService.refreshBikes$.next(true);
      this.router.navigate(['profile/bike/' + this.bikeID]);
    })
  }
}
