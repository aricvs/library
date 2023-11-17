// global array of books
const myLibrary = [];

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
addBookToLibrary(placeholderBook);
const placeholderBook2 = new Book(
  "another one",
  "also doesn't exist",
  123,
  true
);
addBookToLibrary(placeholderBook2);

// opens modal with form to add book
function addBookModal() {
  const addBookBtn = document.querySelector(".add-book-btn");
  const modal = document.querySelector(".modal-overlay");
  addBookBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

// close modal via button
function closeBtnModal() {
  const modal = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".modal-box-close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// close modal via outside click
function clickOutsideModal() {
  const modal = document.querySelector(".modal-overlay");
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

function displayBookCards() {
  const mainContainer = document.querySelector(".main-container");
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    mainContainer.appendChild(card);

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = book.title;
    card.appendChild(cardTitle);

    const cardAuthor = document.createElement("p");
    cardAuthor.textContent = book.author;
    card.appendChild(cardAuthor);

    const cardPages = document.createElement("p");
    cardPages.textContent = book.pages;
    card.appendChild(cardPages);

    const checkboxDiv = document.createElement("div");
    const checkboxLabel = document.createElement("label");
    const checkboxInput = document.createElement("input");
    checkboxInput.id = "read-checkbox";
    checkboxLabel.setAttribute("for", "read-checkbox");
    checkboxLabel.textContent = "Already read?";
    checkboxInput.setAttribute("type", "checkbox");
    checkboxDiv.appendChild(checkboxLabel);
    checkboxDiv.appendChild(checkboxInput);
    card.appendChild(checkboxDiv);
    if (book.read === true) {
      checkboxInput.setAttribute("checked", "true");
    }

    const cardRemoveBtn = document.createElement("button");
    cardRemoveBtn.textContent = "Remove";
    cardRemoveBtn.classList = "remove-button";
    card.appendChild(cardRemoveBtn);
  });
}

function removeBook() {}

// TODO: add a function to add books

// function invocations
addBookModal();
closeBtnModal();
clickOutsideModal();
displayBookCards();
