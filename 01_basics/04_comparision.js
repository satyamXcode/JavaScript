// console.log("2" > 1);
// console.log("02" > 1);



console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // true

/*
The reason is that an equality check == and comparisions > < >= <= work differently
Comparisions convert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false.
*/

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// === : Strict comparision because it compare both datatype

console.log("1" === 3);

