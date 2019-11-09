//---------------------------------- OLD JAVASCRIPT  ---------------------------
// function Person(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }
// Person.prototype.intro = function() {
//   console.log(`Hi there, I'm ${this.name} and I like to ${this.hobby}`);
// };
// function SuperHero(planet, skills, name, age, hobby) {
//   Person.call(this, name, age, hobby);
//   this.planet = planet;
//   this.skills = skills;
// }

// // let SuperHero can also use the method of Person
// SuperHero.prototype = Object.create(Person.prototype);

// // create a new actor
// // const actor = new Person('Jonny Deep', 23, 'make film!');

// // create a new super hero
// const superHero = new SuperHero(
//   'Earth',
//   'rich',
//   'Batman',
//   45,
//   'fight agaist joker'
// );

// console.log(superHero);
// superHero.intro();
//----------------------------------  ES6 JAVASCRIPT  ---------------------------

class ShoppingList {
  constructor(item, number) {
    this.item = item;
    this.number = number;
  }
  sayList() {
    console.log(`we need ${this.number} ${this.item}`);
  }
}

const newList = new ShoppingList('cucumbers', 3);
newList.sayList();

class Product extends ShoppingList {
  constructor(weight, price, item, number) {
    super(item, number);
    this.weight = weight;
    this.price = price;
  }
}

const dailySale = new Product('12Lb', '$23', 'beef', 2);

console.log(dailySale);
dailySale.sayList();
