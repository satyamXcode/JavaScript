// skeleton
// object.create

// literals

const mySym = Symbol("key1");

const userDetails = {
    name: "Satyam",
    age: 18,
    [mySym]: "mykey1", 
    gender: "male",
    "location": "Pune"
}

// console.log(userDetails.name);
// console.log(userDetails.location);  
// console.log(userDetails["location"]);  
// console.log(userDetails[mySym]);
// console.log(typeof(userDetails[mySym]));

// userDetails.name = "Satyam Jaiswal";
// console.log(userDetails);
// Object.freeze(userDetails);
// userDetails.name = "I am Ironman";
// console.log(userDetails);

userDetails.greeting = function (){
     console.log("Hello jS user");
}

userDetails.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(userDetails.greeting());
console.log(userDetails.greetingTwo());