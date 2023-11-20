// global array of books
const myLibrary = [];

// global elements
const mainContainer = document.querySelector(".main-container");
const modalOverlay = document.querySelector(".modal-overlay");
const modalBox = document.querySelector(".modal-box");
const modalBoxClose = document.querySelector(".modal-box-close");
const modalTitle = document.querySelector("#modal-title");
const modalAuthor = document.querySelector("#modal-author");
const modalPages = document.querySelector("#modal-pages");
const modalRead = document.querySelector("#modal-read");
const modalSubmit = document.querySelector(".modal-submit");

// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// push book object to library array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// placeholder for testing constructor and add book functions
const placeholderBook = new Book("placeholder", "doesn't exist", 699, false);
const placeholderBook2 = new Book(
  "another one",
  "also doesn't exist",
  123,
  true
);
addBookToLibrary(placeholderBook);
addBookToLibrary(placeholderBook2);

// clears all cards on the main container
function clearDisplay() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.lastChild);
  }
}

// function to display all books as cards
function displayCards() {
  clearDisplay();
  myLibrary.forEach((book) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    mainContainer.appendChild(cardDiv);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = book.title;
    cardDiv.appendChild(cardTitle);

    const cardAuthor = document.createElement("p");
    cardAuthor.textContent = book.author;
    cardDiv.appendChild(cardAuthor);

    const cardPages = document.createElement("p");
    cardPages.textContent = book.pages;
    cardDiv.appendChild(cardPages);

    const readDiv = document.createElement("div");
    cardDiv.appendChild(readDiv);

    const toggleRead = document.createElement("button");
    if (book.read === true) {
      toggleRead.textContent = "Read";
      toggleRead.style.backgroundColor = "green";
    } else {
      toggleRead.textContent = "Not read";
      toggleRead.style.backgroundColor = "red";
    }
    cardDiv.appendChild(toggleRead);

    const cardRemove = document.createElement("button");
    cardRemove.textContent = "Remove";
    cardDiv.appendChild(cardRemove);
  });
}

// opens modal with form to add book
function addBookModal() {
  const addBookBtn = document.querySelector(".add-book-btn");
  addBookBtn.addEventListener("click", () => {
    modalOverlay.style.display = "block";
  });
}

// close modal via button
function closeBtnModal() {
  const closeBtn = document.querySelector(".modal-box-close");
  closeBtn.addEventListener("click", () => {
    clearModal();
    modalOverlay.style.display = "none";
  });
}

// close modal via outside click
function clickOutsideModal() {
  window.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      clearModal();
      modalOverlay.style.display = "none";
    }
  });
}

// add book and refreshes display
function submitModal() {
  modalSubmit.addEventListener("click", () => {
    let readValue;
    if (modalRead.checked === true) {
      readValue = true;
    } else {
      readValue = false;
    }

    const newBook = new Book(
      modalTitle.value,
      modalAuthor.value,
      modalPages.value,
      readValue
    );

    addBookToLibrary(newBook);
    clearModal();
    modalOverlay.style.display = "none";
    displayCards();
  });
}

// clear all modal forms
function clearModal() {
  modalTitle.value = "";
  modalAuthor.value = "";
  modalPages.value = "";
  modalRead.checked = false;
}

// function invocations
displayCards();
addBookModal();
closeBtnModal();
clickOutsideModal();
submitModal();
