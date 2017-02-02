class Developer extends Person {
  constructor(firstname, lastname, preferredLanguage) {
    super(firstname, lastname);
    this.preferredLanguage = preferredLanguage;
  }
}

let jen = new Person('Jen', 'Maker', 'Javascript');

console.log(jen.fname); // 'Jen'
console.log(jen.preferredLanguage); // 'Javascript'
