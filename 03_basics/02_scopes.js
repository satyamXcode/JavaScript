// if(true){
//     const a = 4;
//     var b = 5;
//     let c = 6;
// }

// //console.log(a); // Error
// console.log(b); // Not follow rule of scope
// //console.log(c); // Error

/////////////// Function Declaration //////////////////

console.log(oneAdd(8));

function oneAdd(num){
    return num + 2;
}

const twoAdd = function(num){
    return num + 3;
}

console.log(twoAdd(4));

