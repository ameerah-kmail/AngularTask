export class user{
    constructor(
        public Id?: number,
        public name: string="",
        public age: string="",
        public email: string="",
        public password?: string
      ) {  }
}