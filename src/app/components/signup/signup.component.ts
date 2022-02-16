
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  newUser: User = new User();
  userList: User[] = [];
  
  constructor(private userService : UsersService,
  private router : Router ){ }
    
 

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response) => {
      console.log(response);
      this.userList = response;
    });
  }

  postUser() {
    this.userService.postUser(this.newUser).subscribe((response) => {
      this.router.navigate(['profile/user/' + (this.userList.length + 1)])
    });
  }

  userInfo() {
    console.log(this.userList.length + 1);
  }
  }


// postUserDetails(){
//   this.newUser.firstName = this.signupForm.value.firstName;
//   this.newUser.lastName = this.signupForm.value.lastName;
//   this.newUser.email = this.signupForm.value.email;
//   this.newUser.age = this.signupForm.value.age;
//   this.newUser.city = this.signupForm.value.city;
//   this.newUser.state = this.signupForm.value.state;
//   this.newUser.password = this.signupForm.value.password;

//   this.userService.postUser(this.newUser).subscribe(res=>{
//     console.log(res);
//     alert("User Added Successfully!")
//     this.router.navigate(["profile/users/"])
//   },
//   err=>{
//     alert("Something went wrong.")
//   })
// }

// getAllUsers(){
// this.userService.getAllUsers()
// .subscribe(res=>
//   this.userData = res
//   )}
  
// getOneUser(){
// this.userService.getOneUser(){
  
// }
//   }


// deleteUser(row: any){
// this.userService.deleteUser(row.id)
// .subscribe(res=>{
//   alert("User Deleted")
//   this.getAllUsers();
// })
// }




