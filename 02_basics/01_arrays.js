// Array

const myArr = [0,1,2,3,4,5];
// const myHeroes = ["Ironman", "Captain America", "Thor"];

// const myArr2 = new Array(6,7,8,9);
// console.log(myArr[1]);
// console.log(myArr2);
// console.log(myHeroes);

// Array methods

// myArr.push(6); -> Add element at the end of the array.
// myArr.push(7);
// myArr.pop(); -> Remove the element at the end of the array.

// myArr.unshift(8); -> Add element starting of the array.
// myArr.shift(); -> Remove the element from the starting of the array.

// console.log(myArr.includes(9)); -> Output will display: True or false
// console.log(myArr.indexOf(3)); -> Will display the index where this element present.

// console.log(myArr);

// const newArr = myArr.join();

// // console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

// slice(start-range, end-range) & splice(start-range, end-range)

console.log("A: ", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B: ", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C: ", myArr);

