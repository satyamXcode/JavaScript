// # Primitive data types :) call by value

// 7 types : String, Number, Boolean, null (empty), undefined (value not assigned), Symbol, BigInt

// const score = 100;
// const scoreCard = 100.1;

// const outSideTemp = null;
// let userEmail; // undefined

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === anotherId);  // false

// # Non-primitive data type :) call by reference

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];

// let myObj = {
//         name: "hitesh",
//         age: 22,
// }

// ++++++++++++++++++++++++++++ Stack & Heap Memory ++++++++++++++++++++++++++++++++++++++++++

// Stack : Primitive data types,
// 
// let myYoutubeName = "tvf";
// let anotherName = myYoutubeName;
// anotherName = "chaiaurcode";

// console.log(myYoutubeName);
// console.log(anotherName);


//  Heap : Non-Primitive

let userOne = {
        email: "user@google.com",
        upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "user2@google.com";

console.log(userOne.email);
console.log(userTwo.email);