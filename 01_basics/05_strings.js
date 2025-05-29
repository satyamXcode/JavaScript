const yourName = "Satyam";
const repoCount = 10;

// console.log(yourName + repoCount + " Value");

console.log(`Hi, my name is ${yourName} and my repo count is ${repoCount}`); // String interpolation.

const gameName = new String('hitesh-hc');

// console.log(gameName[0]);
// console.log(gameName.__prot__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);