import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { user } from '../../models/user';
import { MyAppService } from '../../services/my-app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  newUser: user = { name: '', age: '', email: '' };
  //users: user[] = [];
  ngOnInit(): void {
   }
  constructor(private myAppService: MyAppService) { }

  @Input() user?: user;
  @Output() public userAdded= new EventEmitter<user>();

  addUser(form: NgForm) {
    if (!form.form.valid) {
      form.form.markAllAsTouched();
    }
    else {
     // this.userAdded.emit(this.newUser);
     this.myAppService.addUser(this.newUser);
     console.log(this.myAppService.users);
    }
  }

}
