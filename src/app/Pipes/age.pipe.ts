import { Pipe, PipeTransform } from '@angular/core';
import{user}from'../models/user';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): number {
    let today=new Date().getFullYear();
    let date=new Date(value).getFullYear();
    return (today-date);
  }

}
