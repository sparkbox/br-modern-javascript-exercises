/* Use ES6 class `extends` syntax to construct a Developer class with 
 * preferred language. Use `super` to initialize the firstname and lastname.
 * */

function Person(firstname, lastname) {
  this.fname = firstname;
  this.lname = lastname;
}

function Developer(firstname, lastname, preferredLanguage) {
  Person.call(this, firstname, lastname);
  this.preferredLanguage = preferredLanguage;
}

var jen = new Developer('Jen', 'Maker', 'Javascript');

console.log(jen.fname); // 'Jen'
console.log(jen.preferredLanguage); // 'Javascript'
