//---------------------------------- OLD JAVASCRIPT  ---------------------------

// const person = {
//   name: 'John Doe',
//   age: 23,
//   bye: 'cul8r',
//   introPerson: function() {
//     console.log(`Hi, my name is ${this.name} and I'm ${this.age}`);
//     function sayBi() { // two normal function is pointing to global scope, so this.bye is undefined
//       console.log(`Hi there, ${this.bye}`); // undefined
//     }
//     sayBi();
//   }
// };

// person.introPerson();
//----------------------------------  ES6 JAVASCRIPT  ---------------------------

const person = {
  name: 'John Doe',
  age: 23,
  bye: 'cul8r',
  introPerson: function() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age}`);
    const sayBi = () => {
      console.log(`Hi there, ${this.bye}`); // undefined
    };
    sayBi();
  }
};

person.introPerson();
