const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// const value = coding.forEach((item) => { // For each loop dont return any value.
//     // console.log(item);
//     return item;
// })

// Filter concept

const myNums = [1,2,3,4,5,6,7,8,9];

// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums); // Output: [ 5, 6, 7, 8, 9 ]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// console.log(newNums); // // Output: [ 5, 6, 7, 8, 9 ]

// ForEach loop

const newNums = []

myNums.forEach((num) => {
    if(num > 4){ //Logic
        newNums.push(num)
    }
})

console.log(newNums); // Output: [ 5, 6, 7, 8, 9 ] -> But we have to use logic to get the desired output.

