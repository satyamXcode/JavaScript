// const tinderUser = new Object() // Singleton Object
// console.log(tinderUser);

// const bumbleUser = {} // Non Singleton Object
// console.log(bumbleUser);

const tinderUser = {}

tinderUser.id = "12@12";
tinderUser.name = "Pulkit Shukla";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

// const instagramUser = {
//     mobileNo: 9670012345,
//     userDetails:{
//         userName: "Pulko",
//         DOB: "10 September",
//         followersDetail: {
//             followers: 300,
//             following: 400
//         }
//     }
// }

// //console.log(instagramUser);
// console.log(instagramUser.userDetails.followersDetail.following);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// const obj4 = {obj1, obj2, obj3};

// const obj4 = Object.assign({}, obj1, obj2, obj3); // Object.assign(target, source); target: {}, Source: obj1, obj2, obj3
// console.log(obj4)

// const obj4 = {...obj1, ...obj2}; // Spread method
// console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));