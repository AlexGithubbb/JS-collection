import User, { printName as pringUserName, printAge } from './user.js';

const user = new User('Alex', 26);

pringUserName(user);
printAge(user);

console.log(user);
