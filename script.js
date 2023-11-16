const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// placeholder for testing constructor and add book functions
const placeholderBook = new Book("placeholder", "doesn't exist", 699, true);
addBookToLibrary(placeholderBook);
