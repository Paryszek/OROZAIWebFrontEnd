import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [ LoginService ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any;
  password: any;  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  loginUser() {
    this.loginService.loginUser(this.login, this.password);
  }

}
