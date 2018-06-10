import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { MemberLogin } from '../../models/member.model';
import { LoginModel } from '../../models/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any;
  password: any;
  loginModel: LoginModel;
  constructor(private loginService: LoginService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.loginModel = this.loginService.getDataModel();
  }

  loginUser() {
    if (this.login && this.password && this.login.length !== 0 && this.password.length !== 0) 
    {
      const member: MemberLogin = new MemberLogin(this.login, this.password);
      this.loginService.loginMember(member);
    } else {
      this.toastr.error('Make sure every field is filled', 'Login Error');
    }
  }

}
