import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MemberLogin } from '../models/member.model';
import { LoginModel } from '../models/login.model';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";
@Injectable()
export class LoginService {
  loginModel: LoginModel;
  constructor(private http: HttpClient, private router: Router) {
    this.loginModel = new LoginModel();
  }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.loginModel.isUserLogged;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  
  public getDataModel(): LoginModel {
    return this.loginModel;
  }
  public loginMember(member: MemberLogin) {
    return this.http.post('http://localhost:8080/login', member).subscribe(
      res => {
        if (res) {
          this.loginModel.userName = member.login;
          this.loginModel.isUserLogged = true;
          this.loginModel.loginErrors = [];
          this.router.navigate(['/user/blog']);
        } else {
          this.loginModel.isUserLogged = false;
          this.loginModel.loginErrors.push('Login error! Wrong login or password. Please try again.');
        }
      },
      err => {
        console.log(err);
        this.loginModel.isUserLogged = false;
        this.loginModel.loginErrors.push('Login error!', 'Server is not responding');
      }
    );
  }

}
