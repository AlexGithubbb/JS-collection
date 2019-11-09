//
//
//---------------------------------- OLD JAVASCRIPT  ---------------------------

// variable scope (where the variable available) && hoisting

console.log(developer); // var can be hoisted but undefined
var developer = 'Alex';

sayName(); // function hoisted
function sayName() {
  var designer = 'Bob'; // designer only exists in the funciton, not available outside
  console.log(`Hi, ${designer}`);
}

// console.log(designer); // is not defined
// sayName();

// Array
var names = ['Bob', 'Alex', 'Judy'];

names1 = names;
names2 = ['Bob', 'Alex', 'Judy'];

console.log(names1);
console.log(names1 == names2); // false
//
//
//----------------------------------  ES6 JAVASCRIPT  ---------------------------

// SCOPE (where the variable available) && hoisting
// console.log(babe); // error : is not defined, not be able to hoisted
let babe = 'Coco';

sayName2();
function sayName2() {
  // console.log(babe); // is not defiend
  let babe = 'Lin';
  console.log(babe);
}

const list = [1, 2, 3, 4, 5];

// let is safer and more common in for loop now
// s

//this i can be used outside of loop and it's dangerous 
/* for (var i = 0; i < list.length; i++) {
   console.log(list[i]);
} */

// Object Assign
function getBook(name, author){
  return{
    name,
    author
  } 
}

console.log(getBook('LunYu','Kongzi'));
//{ name: 'LunYu', author: 'Kongzi' }

// Destruction
const person = {
  name:'Lawrrance Jhonson',
  favFruit: ['Apple','Pear','Banana']
}

const {name, favFruit} = person;
console.log(`${name} favariate fruits are ${favFruit}`)


