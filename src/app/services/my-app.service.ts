import { Injectable,EventEmitter } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs/internal/Observable';
import {user} from '../models/user';
import{environment}from 'src/environments/environment';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class MyAppService {
 // public userAdded= new EventEmitter<user>();
  users:user[]=[];
  userToEdit?:user;

public DeleteUser(user:user){
  let i=this.users.indexOf(user);
  if(i>=0){
   return this.users.splice(i,1);
  }
  return ;
}
public EditUser(user:user)
  {
     return this.userToEdit=user;
  }
}
