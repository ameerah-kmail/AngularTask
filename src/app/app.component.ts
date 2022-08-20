import { CommonModule } from '@angular/common';
import { Component ,Input, OnInit} from '@angular/core';
import { AbstractControl,FormBuilder,FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
//import Validation from './utils/validation';
import { user } from './models/user';
import { MyAppService } from './services/my-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  users: user[] = [];
constructor(private myAppService: MyAppService){}
ngOnInit(): void {
this.myAppService.getUsers();
}

}



