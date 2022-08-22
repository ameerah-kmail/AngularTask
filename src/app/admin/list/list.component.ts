import { Component, OnInit } from '@angular/core';
import { MyAppService } from '../../services/my-app.service';
import { user } from '../../models/user';
import { DYNAMIC_TYPE, NodeWithI18n } from '@angular/compiler';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: user[] = [];
  updatedUser: user = { name: '',dof:1, email: '' };
  constructor(private myAppService: MyAppService) { }

  ngOnInit(): void {
    this.users=this.myAppService.users;
  }
  //DELETE
  deleteUser(user: user) {
    this.myAppService.DeleteUser(user);
  }
  //PUT
  editUser(user: user) {
   this.updatedUser= this.myAppService.EditUser(user);
  }

}
