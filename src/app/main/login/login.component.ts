import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any;
  password: any;  
  constructor() { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.login + ' ' + this.password);
  }

}