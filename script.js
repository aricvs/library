// global array variable
const myLibrary = [];

// book object constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// push book to library array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// placeholder books for testing
const book1 = new Book("Worm", "Wildbow", 6800, true);
const book2 = new Book("Three Body Problem", "Liu Cixin", 500, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
