const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const numbers = ['1', '2', '3', '4', '5', '6', '7'];

// const a = alphabet[0];
// const b = alphabet[1];
// console.log(a);
// console.log(b);

// const [a, b, ...rest] = alphabet;
// spread operator
const [a, , c, ...rest] = alphabet;
console.log(a);
// console.log(b);
console.log(c);
console.log(rest);

// // combine arrays using spread operator
// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// const numbers = ['1', '2', '3', '4', '5', '6', '7'];
// let newArray = [...alphabet, ...numbers];
// console.log(newArray);
