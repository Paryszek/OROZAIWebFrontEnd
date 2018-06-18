import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

import { LoginModel } from '../models/login.model';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  loginModel: LoginModel;
  role: string;
  ngOnInit() {
    this.loginModel = this.loginService.getLoginViewModel();
  }

}
