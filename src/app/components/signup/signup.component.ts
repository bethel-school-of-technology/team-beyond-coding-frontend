
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

  }
  // Juan's logic
  postUser() {
    this.userService.postUser(this.newUser).subscribe((response) => {
      this.userService.getAllUsers().subscribe((users) => {
        var currentUser = users.find((user) => user.email == this.newUser.email);
        this.newUser.id = currentUser.id
        this.router.navigate(['profile/user/' + (this.newUser.id)])
      })
    });
  }

  userInfo() {
    console.log(this.newUser.id);
  }



  }




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




