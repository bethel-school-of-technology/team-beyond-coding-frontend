import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  userId: number;
  userEmail : string;

  constructor(private userService : UsersService, private http : HttpClient, private actRoute: ActivatedRoute, public router : Router) { }

  ngOnInit(): void {

  }

  userLogin(){
    this.userService.login(this.userEmail).subscribe(response =>{
      this.router.navigate(['/profile/user/'])
    })
  }

  navigateTo(){
    this.router.navigate(['profile/user/' + this.userId])
  }





}

