const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book two', genre: 'History', publish: 1971, edition: 1995},
    {title: 'Book three', genre: 'Non-Fiction', publish: 1990, edition: 2000},
    {title: 'Book four', genre: 'Science', publish: 2000, edition: 2008},
    {title: 'Book five', genre: 'Fiction', publish: 2005, edition: 2015},
]

let userBooks1 = books.filter((bk) => bk.genre === 'History');
console.log(userBooks1);

let userBooks2 = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'Fiction';
})
console.log(userBooks2);

