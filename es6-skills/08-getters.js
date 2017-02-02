class Person {
  constructor(firstname, lastname) {
    this.fname = firstname;
    this.lname = lastname;
  }

  get fullName() {
    return this.fname + ' ' + this.lname;
  }
}

let jen = new Person('Jen', 'Maker');

console.log(jen.fullName);
