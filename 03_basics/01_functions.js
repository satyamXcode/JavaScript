// function addNumber01(number1, number2){
// console.log(number1+number2);
// }

// addNumber01(9,11);

// function addNumber02(num1, num2){
//     return (num1 + num2);
// }

// console.log(addNumber02(7, 8));


// function userLoggedIn(username){
//     return `${username} logged In`;
// }

// console.log(userLoggedIn("satyam"));

// function calculateCartPrice(...num1){  //rest operator
//     return num1; 
// }

// console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
    userName: "Satyam Jaiswal",
    status: "Offline"
}

function userDetails(anyUser){
  console.log(`${anyUser.userName} is showing ${user.status}`);
}

userDetails(user);