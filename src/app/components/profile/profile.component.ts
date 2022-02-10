import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { Bike } from 'src/app/models/bike/bike';
import { BikeService } from 'src/app/services/bike.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  faUserCircle = faUserCircle;
  faUsersCog = faUsersCog;
  faMotorcycle = faMotorcycle;
  bikeList: Bike[] = [];
  bikeID: number;

  UserName = 'Username';
  UserId = '00';
  FullName = 'Placeholder';
  City = 'Placeholder';
  State = 'Placeholder';
  Birthday = '12/3456';
  Email = 'Placeholder';
  toggleData:string = 'Private';
  

  
  constructor(
    private actRoute: ActivatedRoute,
    private myBikeService: BikeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myBikeService.refreshBikes$.subscribe(() => {
          this.myBikeService.getAllBikes().subscribe((response) => {
            console.log(response);
            this.bikeList = response;
          });
    })
  }
  toggle() {
    if (this.toggleData === "Private") {
        this.toggleData = "Public";
    } else {
      this.toggleData = "Private"
    }
  };
    
  
  
}