import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Member } from '../../models/member.model';
import { Admin } from '../../models/admin.model';

@Component({
  selector: 'app-admin',
  providers: [ AdminService ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService) {}
  adminViewModel: Admin;
  ngOnInit() {
    this.adminService.initUsers();
    this.adminViewModel = this.adminService.getAdminViewModel();
  }

  removeUser(id: number) {
    this.adminService.removeUser(id);
  }

}
