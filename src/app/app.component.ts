import { Component ,Input} from '@angular/core';
import { AbstractControl,FormBuilder,FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { user } from './models/user';
import { MyAppService } from './services/my-app.service';
//import Validation from './utils/validation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  users:user[]=[];
  userToEdit?:user;

  newUser: user={name:'', age:'',email:''};

DeleteUser(user:user){
    let i=this.users.indexOf(user);
    if(i>=0){
      this.users.splice(i,1);
    }
  }

  EditUser(user:user)
  {
    this.userToEdit=user;
  }
 addUser(){
  
  
 }
  }



