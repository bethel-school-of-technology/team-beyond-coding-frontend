
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
      firstName: '',
      lastName:'',
      email:'',
      age:'',
      city:'',
      state: '',
      password: ''

    })
  }



postUserDetails(){
  this.userModelObject.firstName = this.signupForm.value.firstName;
  this.userModelObject.lastName = this.signupForm.value.lastName;
  this.userModelObject.email = this.signupForm.value.email;
  this.userModelObject.age = this.signupForm.value.age;
  this.userModelObject.city = this.signupForm.value.city;
  this.userModelObject.state = this.signupForm.value.state;
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
