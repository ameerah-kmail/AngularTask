import { Component, OnInit } from '@angular/core';
import { MyAppService } from '../../services/my-app.service';
import { user } from '../../models/user';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: user[] = [];
  constructor(private myAppService: MyAppService) { }

  ngOnInit(): void {
  }
  //GET
  getUsers() {
    this.users = this.myAppService.getUsers();
  }
  //DELETE
  deleteUser(user: user) {
    this.myAppService.DeleteUser(user);
  }
  //PUT
  editUser(user: user) {
    this.myAppService.EditUser(user);
  }
  //POST
  addUser(user: user) { 
    //this.myAppService.addUser(user);
    this.users.push(user);
  }

}
