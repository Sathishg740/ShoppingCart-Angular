import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  userId:any;
  loginForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(3)])
  })
  loginUser(){
    console.log(this.loginForm.value);
    this.userId=this.loginForm.value.user;
    console.log('email',this.userId);
    if(this.userId=="admin@gmail.com")
    {
      alert("Admin Logged in Successfully")
      this.router.navigate(['/product'])
    }
    else{
      alert("User Logged in Successfully")
      this.router.navigate(['user/productsList']);
    }
    // if (userId == 'satishadmin') {
    //   route to admin section
    // } else {
    //   route to user page
    // // }
  }
  get user(){
    return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
  }
}
