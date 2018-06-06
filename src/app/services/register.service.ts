import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from '../models/member';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  public registerMember(member: Member) {
    return this.http.post('http://localhost:8080/register', member).subscribe(
      res => {
        //
      },
      err => {}
    );
  }

}
