import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { Bike } from 'src/app/models/bike/bike';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { BikeService } from 'src/app/services/bike.service';
import { User } from 'src/app/models/user/user';
import { UsersService } from 'src/app/services/users.service';

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

  userId: number;  
  currentUser: User = new User();


  
  constructor(
    private actRoute: ActivatedRoute,
    private myBikeService: BikeService,
    private router: Router,
    private userService : UsersService
  ) {}

  ngOnInit(): void {
    this.myBikeService.getAllBikes().subscribe((response) => {
      console.log(response);
      this.bikeList = response;
    });

    this.actRoute.params.subscribe((params) => {
      this.userId= params['id']
    
      this.userService.getOneUser(this.userId).subscribe((response) => {
        console.log(response);
        this.currentUser = response;
      })
  });
    
  
   
  }

}
