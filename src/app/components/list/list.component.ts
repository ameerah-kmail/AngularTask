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
  newUser: user = { name: '', age: '', email: '' };
  constructor(private myAppService: MyAppService) { }

  ngOnInit(): void {
    this.users=this.myAppService.users;
  }
  //GET
  getUsers() {
    this.users = this.myAppService.users;
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
    this.myAppService.addUser(user);
    //this.users.push(user);
  }

}
