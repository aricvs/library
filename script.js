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
const placeholderBook = new Book("placeholder", "doesn't exist", 699, true);
addBookToLibrary(placeholderBook);

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

function loopLibrary() {
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

    // TODO: add conditional to add default state of read checkbokx
    const checkboxDiv = document.createElement("div");
    const checkboxLabel = document.createElement("label");
    const checkboxInput = document.createElement("input");
    checkboxInput.id = "read-checkbox";
    checkboxInput.setAttribute("type", "checkbox");

    const cardRemoveBtn = document.createElement("button");
    cardRemoveBtn.textContent = "Remove";
    card.appendChild(cardRemoveBtn);
  });
}

// function addBookCard() {
//   const mainContainer = document.querySelector(".main-container");
//   const modal = document.querySelector(".modal-overlay");
//   const addBtn = document.querySelector(".modal-submit");

//   addBtn.addEventListener("click", () => {
// const card = document.createElement("div");
// card.classList.add("card");
// mainContainer.appendChild(card);

// const cardTitle = document.createElement("h2");
// card.appendChild(cardTitle);

// const cardAuthor = document.createElement("p");
// const cardPages = document.createElement("p");

// const checkboxDiv = document.createElement("div");
// const checkboxLabel = document.createElement("label");
// const checkboxInput = document.createElement("input");
// checkboxInput.id = "read-checkbox";
// checkboxInput.setAttribute("type", "checkbox");
//   });
// }

// function invocations
addBookModal();
closeBtnModal();
clickOutsideModal();
loopLibrary();
