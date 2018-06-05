import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

class User {
  login: string;
  password: string;
  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }
}

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  public loginUser(login: string, password: string) {
    const user: User = new User(login, password);
    return this.http.post('http://localhost:8080/login', user).subscribe(
      res => {
        // przeniesienie do bloga jesli sukces
      },
      err => {}
    );
  }

}
