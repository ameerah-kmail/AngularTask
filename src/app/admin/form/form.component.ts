import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { user } from '../../models/user';
import { MyAppService } from '../../services/my-app.service';
import{ActivatedRoute, Router} from'@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  newUser: user = {Id:0 ,dof:2, name: '', email: '' };
  //@Input() updatedUser?: user;
 // @Output() public userAdded = new EventEmitter<user>();

  ngOnInit(): void { 
    //let Id=this.route.snapshot.paramMap.get("Id");
    //this.newUser=this.myAppService.
  }
  constructor(private myAppService: MyAppService,public router:Router,public route:ActivatedRoute) { }

  addUser(form: NgForm) {
    if (!form.form.valid) {
      form.form.markAllAsTouched();
    }
    else {
     
      this.myAppService.users.push({ ...this.newUser });
      this.router.navigate(['/Admin/List']);
      this.newUser={Id:0,name: '',dof:3, email: ''};
    }
  }

}
