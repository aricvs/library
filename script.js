"use strict";

// global array variable
const myLibrary = [];

// global DOM variables
const mainForm = document.querySelector(".main__form");
const addBookBtn = document.querySelector(".main__add-book-btn");
const readCheckbox = document.querySelector("#form__read");
const formSubmitBtn = document.querySelector(".form__submit-button");
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

// show form to add new book
function openMainForm() {
  addBookBtn.addEventListener("click", () => {
    addBookBtn.style.display = "none";
    mainForm.style.display = "flex";
  });
}

// submits new book from form data
function addBook() {
  formSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const newTitle = document.querySelector("#form__title").value;
    const newAuthor = document.querySelector("#form__author").value;
    const newPages = document.querySelector("#form__pages").value;
    const newRead = readCheckbox.checked ? "Read" : "Not read";
    const newBook = new Book(newTitle, newAuthor, newPages, newRead);
    addBookToLibrary(newBook);
    mainForm.style.display = "none";
    addBookBtn.style.display = "block";
    clearTable();
    displayBooks();
  });
}

// TODO: fix bug, once all items in the table are removed, you can't toggle read
// and remove anymore
function removeBook() {
  const removeBtns = document.querySelectorAll(".form__remove-btn");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const removeTitle =
        btn.parentElement.parentElement.firstChild.textContent;
      const bookIdx = myLibrary.findIndex((book) => book.title === removeTitle);
      myLibrary.splice(bookIdx, 1);
      btn.parentElement.parentElement.innerHTML = "";
    });
  });
}

// toggle book status between read and unread
function toggleRead() {
  const readBtns = document.querySelectorAll(".form__read-btn");
  readBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const readTitle = btn.parentElement.parentElement.firstChild.textContent;
      const bookIdx = myLibrary.findIndex((book) => book.title === readTitle);
      const readStatus = btn.parentElement.parentElement.childNodes[3];

      if (myLibrary[bookIdx].read === "Read") {
        myLibrary[bookIdx].read = "Not read";
        readStatus.textContent = "Not read";
      } else {
        myLibrary[bookIdx].read = "Read";
        readStatus.textContent = "Read";
      }
    });
  });
}

// clears all tables
function clearTable() {
  tableBody.innerHTML = "";
}

displayBooks();
openMainForm();
addBook();
removeBook();
toggleRead();
