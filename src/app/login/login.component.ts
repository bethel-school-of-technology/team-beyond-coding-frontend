import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  public loginGroup!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, public router : Router) { }

  ngOnInit(): void {

    this.loginGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })

    this.loginForm = this.formBuilder.group({
      email: 'placeholder',
      password: 'placeholder',
    })
  }





  login(){
    this.http.get<any>('http://localhost:3000/users')
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if (user){
        this.loginForm.reset();
        this.router.navigate(['/profile'])
      }
      else{
        alert("User not found");
      }
    }), err=>{
      alert("Something went wrong ")
    }
  }


}

