import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MemberLogin } from '../models/member';
import { LoginModel } from '../models/login-model';
@Injectable()
export class LoginService {
  loginModel: LoginModel;
  constructor(private http: HttpClient) {
    this.loginModel = new LoginModel();
  }
  public getDataModel(): LoginModel {
    return this.loginModel;
  }
  public loginMember(member: MemberLogin) {
    return this.http.post('http://localhost:8080/login', member).subscribe(
      res => {
        console.log(res);
        this.loginModel.loginErrors = [];
      },
      err => {
        console.log(err);
        this.loginModel.loginErrors.push('Login error! Wrong login or password. Please try again.');
      }
    );
  }

}
