import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../models/admin.model';
import { Member } from '../models/member.model';
import _ = require('lodash');

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) {}
  adminViewModel: Admin = new Admin();

  public getAdminViewModel() {
    return this.adminViewModel;
  }

  public removeUser(id: number) {
    return this.http.post('http://localhost:8080/remove', id).subscribe(
      res => {
        if (res) {
          this.adminViewModel.adminErrors = [];
          this.initUsers();
        } else {
          this.adminViewModel.adminErrors.push('Removing user error! Wrong user id.');
        }
      },
      err => {
        console.log(err);
        this.adminViewModel.adminErrors.push('Removing user error! Server is not responding');
      }
    );
  }

  public initUsers(): any {
    this.http.get<any>('http://localhost:8080/users',
      {
        observe: 'response'
      }
    ).map((res) => res).subscribe(val => {
      if (val) {
        this.mapToAdminViewModelUsers(val.body);
      }
    });
  }

  private mapToAdminViewModelUsers(data: any): void {
    this.adminViewModel.users.length = 0;
    _.forEach(data, (d) => {
      this.adminViewModel.users.push(new Member(d.id, d.firstName, d.lastName, d.login, undefined, undefined));
    });
  }
}
