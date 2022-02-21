import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { Bike } from 'src/app/models/bike/bike';
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
  toggleData: string = 'Private';

  images = [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      imgAlt: 'bike1',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      imgAlt: 'bike2',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1552306062-29a5560e1c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      imgAlt: 'bike3',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1596687760372-4c0d266059a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      imgAlt: 'bike4',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1558979159-2b18a4070a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      imgAlt: 'bike5',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1614294649523-b9a566499001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      imgAlt: 'bike6',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      imgAlt: 'bike7',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1588756681780-9d5859fc2ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
      imgAlt: 'bike8',
    },
  ];

  userId: number;  
  currentUser: User = new User();



  constructor(
    private actRoute: ActivatedRoute,
    private myBikeService: BikeService,
    private router: Router,
    private userService : UsersService
  ) {}

  
  ngOnInit(): void {
    
    //after login or signing up this allows the info to show up for the current user
    this.actRoute.params.subscribe((params) => {
      this.userId= params['id']
      this.userService.getOneUser(this.userId).subscribe((response) => {
        this.currentUser = response;
        this.myBikeService.setOption(this.currentUser.id);
      })
    });

    // this will make it so only user's bikes show
    this.myBikeService.refreshBikes$.subscribe(() => {
      this.myBikeService.getAllBikes().subscribe((response) => {
        //console.log(response);
        for (let i = 0; i < response.length; i++){
          if (response[i].userId == this.userId) {
            this.bikeList.push(response[i]) ;
          }
        }
      });
    });

  }
  toggle() {
    if (this.toggleData === 'Private') {
      this.toggleData = 'Public';
    } else {
      this.toggleData = 'Private';
    }
  }
}

