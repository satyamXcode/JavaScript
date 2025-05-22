let score = "33";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof(valueInNumber));

// Conversion to Number("33")
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Satyam";

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; & 0 => false
// "" => false
// "Satyam" => true

let someNumber = 33;

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof(stringNumber));


// ********************************************** Operations ************************************************************

console.log(2 + 2); // 4
console.log(2*5); // 10
console.log(2**3); // 2 power 3 => 8

console.log("1" + 2 + 3); // 123
console.log(1 + 2 + "3"); // 33

console.log(+true); // 1
console.log(+"");  // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2