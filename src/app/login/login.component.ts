import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../models/user/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUser: User = new User ();
  userId: number;
  userEmail : string;
  userList: User[];

  constructor(private userService : UsersService, private http : HttpClient, private actRoute: ActivatedRoute, public router : Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response) =>{
      this.userList = response;
    });
  }

  userLogin(){
    var currentUser = this.userList.find(user => user.email == this.loginUser.email)
    if(currentUser.password === this.loginUser.password){
       this.router.navigate(['profile/user/' + currentUser.id])
    } else {
      alert('Wrong User Information')
    }  
   }





}

