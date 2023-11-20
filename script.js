// global array of books
const myLibrary = [];

// global elements
const mainContainer = document.querySelector(".main-container");

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

// function to display all books as cards
function displayCards() {
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

// function invocations
displayCards();
addBookModal();
closeBtnModal();
clickOutsideModal();
