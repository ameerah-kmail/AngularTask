import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { AgePipe } from '../Pipes/age.pipe';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    AgePipe
   ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  providers:[]
 //exports:[ AgePipe]
})
export class AdminModule { }
