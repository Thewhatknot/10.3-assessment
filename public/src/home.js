//Create a function called getTotalBooksCount that takes in an array of books as an object. 
//return books.length
function getTotalBooksCount(books) {
return books.length;
}

//Create a function called getTotalAccountsCount that takes in an array of accounts.
//return books.length
function getTotalAccountsCount(accounts) {
return accounts.length;
}

//Create a function called getBorrowedBooksCount that takes in an array of books.
//Create a variable called booksBorrowed to filter through the books array.
//Create a function inside of the books.filter method to filter through the borrows array
//If the borrows.returned is === to false then that book is pushed to the resulting array.
// return the length of the resulting array.
function getBooksBorrowedCount(books) {
    let booksBorrowed = books.filter((book) => book.borrows.filter((borrowed) => borrowed.returned === false).length>0);
    return booksBorrowed.length;
    }

//The parameter of this function is an array of books
//Return an array containing five objects or fewer that represents the most commmon occuring genres ordered from most common to least
//Each object in the returned array should have two keys name: genre and count: # of times the genre occurs in the array
//First we need to loop over the books array and count the number of times each genre shows up storing these results in an array
//If there is a genre in the map then add 1
//If there isn't a genre in the map then set the key and value to one
//Map the Object entries and return them with name and count
//Sort the array so the most common comes first
function getMostCommonGenres(books) {
  let map = {};
  books.forEach((num) => {
   if (map[num.genre]) {
    map[num.genre]++;
   } else {
    map[num.genre] = 1;
   }
  });
  return Object.entries(map)
   .map(([name, count]) => {
    return {
     name,
     count
    };
   })
   .sort((a, b) => b.count - a.count)
   .slice(0, 5);
 }

 function getMostPopularBooks(books) {
  return books.map((book) => {return { name: book.title, count: book.borrows.length };
   })
   .sort((a, b) => (a.count < b.count ? 1 : -1))
   .slice(0, 5);
 }

 function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     theAuthor.count += book.borrows.length;
    }
   });
   result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
 }
 
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
