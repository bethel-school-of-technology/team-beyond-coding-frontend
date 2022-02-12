
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UsersService } from 'src/app/services/users.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  userModelObject: User = new User();
  userData !: any;

  public signupForm !: FormGroup;
  
  constructor(private formBuilder: FormBuilder, 
  private userService : UsersService,
  private router : Router ){ }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      age:[''],
      location:[''],
      password:['']

    })
  }

// signup(){
//     this.http.post<any>('http://localhost:3000/users', this.signupForm.value) 
//     .subscribe(res=>{
//       alert("Registration Successful");
//       this.signupForm.reset();
//       this.router.navigate(['login']);
//     }, err=>{
//       alert("Something went wrong, please try again.")
    
//     })
//   }

postUserDetails(){
  this.userModelObject.firstName = this.signupForm.value.firstName;
  this.userModelObject.lastName = this.signupForm.value.lastName;
  this.userModelObject.email = this.signupForm.value.email;
  this.userModelObject.age = this.signupForm.value.age;
  this.userModelObject.location = this.signupForm.value.location;
  this.userModelObject.password = this.signupForm.value.password;

  this.userService.postUser(this.userModelObject).subscribe(res=>{
    console.log(res);
    alert("User Added Successfully!")
    this.router.navigate(["profile"])
  },
  err=>{
    alert("Something went wrong.")
  })
}

getAllUsers(){
this.userService.getAllUsers()
.subscribe(res=>
  this.userData = res
  )}
  
// getOneUser(){
// this.userService.getOneUser(){
  
// }
//   }


deleteUser(row: any){
this.userService.deleteUser(row.id)
.subscribe(res=>{
  alert("User Deleted")
  this.getAllUsers();
})
}


}
