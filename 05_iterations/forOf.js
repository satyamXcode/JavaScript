// let arr = [1, 2, 3, 4, 5];
 
// for (const i of arr) {
//     console.log(i);
// }

// let greetings = "Hello world!";

// for (let greet of greetings) {
//    console.log(greet);
// }

// const map = new Map();

// map.set('IN', 'India');
// map.set('USA', 'United state of amarica');
// map.set('UK', 'United Kingdom');

// //console.log(map);

// for (const [key, value] of map) {
//     console.log(`${key} :: ${value}`);
// }

const myObject = {
    'game1': "Ironman",
    'game2': "Captain"
}

for (const [key, value] of myObject) { // Object [key, value] are not iterable.
    console.log(key, ':-', value);
}