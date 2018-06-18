import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MemberLogin } from '../models/member.model';
import { LoginModel } from '../models/login.model';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
@Injectable()
export class LoginService {
  loginViewModel: LoginModel;
  constructor(private http: HttpClient, private router: Router) {
    this.loginViewModel = new LoginModel();
  }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.loginViewModel.isUserLogged;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  public getLoginViewModel(): LoginModel {
    return this.loginViewModel;
  }
  public loginMember(member: MemberLogin) {
    return this.http.post('http://localhost:8080/login', member).subscribe(
      res => {
        if (res) {
          this.loginViewModel.userName = member.login;
          this.loginViewModel.isUserLogged = true;
          this.loginViewModel.loginErrors = [];
          this.router.navigate(['/user/blog']);
        } else {
          this.loginViewModel.isUserLogged = false;
          this.loginViewModel.loginErrors.push('Login error! Wrong login or password. Please try again.');
        }
      },
      err => {
        console.log(err);
        this.loginViewModel.isUserLogged = false;
        this.loginViewModel.loginErrors.push('Login error! Server is not responding');
      }
    );
  }
  public initRoles(): any {
    this.http.get<any>('http://localhost:8080/role',
      {
        params: {
          login: this.loginViewModel.userName,
        },
        observe: 'response'
      }
    ).map((res) => res).subscribe(val => {
      if (val && val.body.roles.length > 0) {
        this.loginViewModel.role = val.body.roles[val.body.roles.length - 1].name;
      }
    });
  }

}
