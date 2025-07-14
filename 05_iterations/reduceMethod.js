const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0)

// output:)

// acc: 0 and currVal: 1
// acc: 1 and currVal: 2
// acc: 3 and currVal: 3
// 6

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);  // output: 6

