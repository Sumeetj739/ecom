import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth : AuthService ,private router : Router){}

email =''
password ! : number

loginError : any
isActiceSession = false

isLoggedIn(){

  if(this.auth.login( this.email,  this.password)){

    this.router.navigate(["/profile"]);
    this.isActiceSession = true

    } else {
      this.loginError = 'Invalid username or password';
    }

  

}


}
