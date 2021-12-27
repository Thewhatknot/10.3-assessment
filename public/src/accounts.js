//Create a function called findAccountsById that takes two arguments: an array of accounts and an ID of an account that has a matching ID
//Use the Find Method to search through the array to find the matching ID.
//Return the matching ID (findID)
function findAccountById(accounts, id) {
let findId = accounts.find((account) => account.id === id);
return findId;
};


//Create a function called sortAccountByLastName that takes in an array of objects called accounts using the sort method to sort accounts by last name alphabetically.
//in order to sort properly, the account names have to be converted toLowerCase.
//create an anonymous function that will compare the last name of aAccount to the last name of BAccount.
//If the number returned is negative, aAccount will be moved before bAccount.
//If the number returned is positive, bAccount will be moved before aAccount.
//return the array of objects sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
accounts.sort((aAccount, bAccount) => 
aAccount.name.last.toLowerCase() > bAccount.name.last.toLowerCase() ? 1 : -1);
return accounts;
}


//Create a function called getTotalNumberofBooksBorrowed that takes in two arguments: an array of accounts and an array of books.
//Create a for loop to run through the length of the array of books.
//Create a for loop to run through the borrowed array based on the index of the previous loop.
//If the account id matches the borrowed id, the totalBorrows variable is incremented by 1.
//return a number that represents the number of times the account's ID appears in any books in the borrows array.
function getTotalNumberOfBorrows(account, books) {
totalBorrows = 0;
for (let i=0; i<books.length; i++){
for(let j=0; j<books[i].borrows.length; j++){
if(account.id === books[i].borrows[j].id){
totalBorrows += 1;
}
}
}
return totalBorrows;
}


//Create return array (booksPossessed)
//Find account IDs that have books borrowed in the borrows array
//If account ID in the borrows array matches the account ID in the accounts array and the borrows.returned === false,
//Push book to the bookPossessed Array.
function getBooksPossessedByAccount(accounts, books, authors) {
  let booksPossessed=[];
  books.forEach(book => {
  let borrowObject = book.borrows;
  if (borrowObject.find(borrow => borrow.id === accounts.id && borrow.returned === false)) {
  booksPossessed.push(book);
  }
  })
  //For each book in the booksPossessed Array, find the author and add the author to the array
  //return the booksPossessed array.
  booksPossessed.forEach(book => {let author = authors.find(person => person.id === book.authorId); 
  book['author'] = author;
  })
  return booksPossessed; 
  }
  

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
