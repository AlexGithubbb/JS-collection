//---------------------------------- OLD JAVASCRIPT  ---------------------------

//----------------------------------  ES6 JAVASCRIPT  ---------------------------
const shoopingList = [
  'bread',
  'chicken chest',
  'spring onion',
  'green pepper',
  'laoganma',
  'black pepper',
  'eggs',
  'pork belly (五花肉)'
];

// forEach
shoopingList.forEach((item, index) => console.log(`${index}: ${item}`)); // forEach doesn't return array

// Map
const newList = shoopingList.map(item =>
  item[0].toUpperCase().concat(item.slice(1))
);
// console.log(newList);

// Filter
const filteredList = shoopingList.filter(item => item.length < 10);

console.log(filteredList);
