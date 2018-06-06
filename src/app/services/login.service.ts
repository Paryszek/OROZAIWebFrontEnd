import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MemberLogin } from '../models/member';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  public loginMember(member: MemberLogin) {
    return this.http.post('http://localhost:8080/login', member).subscribe(
      res => {
        // przeniesienie do bloga jesli sukces
      },
      err => {}
    );
  }

}
