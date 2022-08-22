import { Data } from "@angular/router";

export class user{
    constructor(
        public Id?: number,
        public name: string="",
       // public age: string="",
        public dof: number = 0,
       //public dof?:  Date,
        public email: string="",
        public password?: string
      ) {  }
}