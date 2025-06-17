// const user = {
//     username: "Satyam Jaiswal",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`); // We can use this within Object only.
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = "Sonali Swain";
// user.welcomeMessage();
// console.log(this); // Print: {} --empty object

// function chai(){
//     let userName = "Satyam";
//     console.log(this.userName); // This not work in functions.  // Print undefined.
// }

// chai();

//////////////////////// (Arrow functions) //////////////////////

// Explicit Return :)

// An explicit return uses the return keyword to specify the value that the function should output. 
// This is the standard way to return a value from a function. If a function does not have an explicit return statement, 
// it will return undefined by default.

const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(4, 7));

// Implicit Return  :)
// An implicit return occurs in arrow functions when the function body consists of a single expression without curly braces. 
// In this case, the result of the expression is automatically returned without using the return keyword.


const addThree = (num1, num2) => num1 + num2;

console.log(addThree(8, 7));

const addFour = (num1, num2) => (num1 + num2);

console.log(addFour(15, 7));
