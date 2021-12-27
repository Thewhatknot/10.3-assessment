//Create a function called findAuthorById that accpets two arguments: an authors array and an id of a single account that has a matching id.
//Use the find method to search through the array to find the account with the matching id.
//return the matching id.
function findAuthorById(authors, id) {
let findAuthorId = authors.find((author) => author.id === id);
return findAuthorId;
};

//Create a function called findBookById with accepts two arguments: an array of books and an id of indiviual books to match an inputted id.
//Use the find method to search through the array of books to find the book with the matching book id.
//return the matching book id.
function findBookById(books, id) {
let bookId = books.find((book) => book.id === id);
return bookId;
}

///Create a function called partitionBooksByBorrowedStatus that takes on an array of books.
//Create an array (resultsArray) of two arrays: borrowed books and an returned books
//Use the filter method look through the books array and returns a new array of books that meet our condition.
function partitionBooksByBorrowedStatus(books) {
  //This array will be books that have been returned 
  let returnedBooks = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true)
  );
  //This array will be books that have not been returned.
  let borrowedBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false)
  );
  //Use a spread operator to add both arrays to the resultsArray.
  let resultsArray = [[...borrowedBooks], [...returnedBooks]];
  return resultsArray;
  }
  
//Create a function named getBorrowersForBook that takes in two parameters 1) A book object and 2)the accounts array.
//Use the map() method to loop through the borrows array of the book object.
//Use the find() method within the map method to loop through the accounts array.
//Pass in an anonymous function as the callback function that takes in each account and finds the account where account.id === borrow.id
//Return the spread operator that contains the output values of the map method as borrow and the account variable.
//Use the slice method on the output array to return only the portion of the array up to index value 10 of the returned array.
function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
  let account = accounts.find((account) => account.id === borrow.id);
  return { ...borrow, ...account };
  })
  .slice(0, 10);
  }
 

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
