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

function addBookModal() {
  const addBookBtn = document.querySelector(".add-book-btn");
  const modal = document.querySelector(".modal-overlay");
  addBookBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

function closeBtnModal() {
  const modal = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".modal-box-close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function clickOutsideModal() {
  const modal = document.querySelector(".modal-overlay");
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

addBookModal();
closeBtnModal();
clickOutsideModal();
