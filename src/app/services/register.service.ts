import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service'
import { Member, MemberLogin } from '../models/member.model';
import { RegisterModel } from '../models/register.model';

@Injectable()
export class RegisterService {
  registerModel: RegisterModel;
  constructor(private http: HttpClient, private loginService: LoginService) {
    this.registerModel = new RegisterModel();
  }
  
  public getRegisterModel(): RegisterModel {
    return this.registerModel;
  }
  public registerMember(member: Member) {
    return this.http.post('http://localhost:8080/register', member).subscribe(
      res => {
        if (res) {
          this.loginService.loginMember(new MemberLogin(member.login, member.password));
          this.registerModel.registerErrors = [];
        } else {
          this.registerModel.registerErrors.push('Register error, please try again');
        }
      },
      err => {
        console.log(err);
        this.registerModel.registerErrors.push('Register error, Server is not responding');
      }
    );
  }

}
