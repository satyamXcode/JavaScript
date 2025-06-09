const marvelHeroes = ["Ironman", "Doctor Strange", "Captain America", "Spiderman"];
const dcHeroes = ["Batman", "Superman", "Aquaman"];

//marvelHeroes.push(dcHeroes);

//console.log(marvelHeroes);

// const AllHeroes = marvelHeroes.concat(dcHeroes);
// console.log(AllHeroes);

// const AllHeroes2 = [...marvelHeroes, ...dcHeroes];
// console.log(AllHeroes2);

// const numberArray = [1,2,3,[4,5,6],7,[8,9,1,[0,1]]];

// const real_numberArray = numberArray.flat(Infinity);
// console.log(real_numberArray);

// Output:)
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9, 1,
//   0, 1
// ]

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name: "Satyam"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));