import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs/internal/Observable';
import {user} from '../models/user';
import{environment}from 'src/environments/environment';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class MyAppService {

  //constructor(private http:HttpClient) { }
  //public getUser():Observable<user[]>{
    //return this.http.get<user[]>(`${environment.apiUrl}/${this.url}`);
 // }
}
