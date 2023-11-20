// global array variable
const myLibrary = [];

// global DOM variables
const tableBody = document.querySelector(".table__body");

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
const book1 = new Book("Worm", "Wildbow", 6800, "Read");
const book2 = new Book("Three Body Problem", "Liu Cixin", 500, "Not read");
addBookToLibrary(book1);
addBookToLibrary(book2);

// function to loop through library and display books as table columns
function displayBooks() {
  myLibrary.forEach((book) => {
    tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);

    titleData = document.createElement("td");
    titleData.textContent = book.title;
    tableRow.appendChild(titleData);

    authorData = document.createElement("td");
    authorData.textContent = book.author;
    tableRow.appendChild(authorData);

    pagesData = document.createElement("td");
    pagesData.textContent = book.pages;
    tableRow.appendChild(pagesData);

    readData = document.createElement("td");
    readData.textContent = book.read;
    tableRow.appendChild(readData);
  });
}

displayBooks();
