"use strict";

// global array variable
const myLibrary = [];

// global DOM variables
const mainForm = document.querySelector(".main__form");
const addBookBtn = document.querySelector(".main__add-book-btn");
const tableHead = document.querySelector(".table__header");
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
    const tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);

    const titleData = document.createElement("td");
    titleData.textContent = book.title;
    tableRow.appendChild(titleData);

    const authorData = document.createElement("td");
    authorData.textContent = book.author;
    tableRow.appendChild(authorData);

    const pagesData = document.createElement("td");
    pagesData.textContent = book.pages;
    tableRow.appendChild(pagesData);

    const readData = document.createElement("td");
    readData.textContent = book.read;
    tableRow.appendChild(readData);

    const tableButtons = document.createElement("td");
    tableButtons.classList.add("table__buttons");
    tableRow.appendChild(tableButtons);

    const readBtn = document.createElement("button");
    readBtn.textContent = "Toggle read";
    readBtn.classList.add("form__read-btn");
    tableButtons.appendChild(readBtn);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("form__remove-btn");
    tableButtons.appendChild(removeBtn);
  });
}

function addNewBook() {
  addBookBtn.addEventListener("click", () => {
    addBookBtn.style.display = "none";
    mainForm.style.display = "flex";
  });
}

displayBooks();
addNewBook();
