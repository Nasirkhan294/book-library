const addbook = document.querySelector(".add-btn");
const close = document.querySelector(".fa-times");
const form = document.querySelector("form");

const showAddBookForm = () => {
  form.reset();
  form.style.display = "flex";
  addbook.style.display = "none";
};

const hideAddBookForm = () => {
  form.style.display = "none";
  addbook.style.display = "block";
};

const addNewBook = () => {
  const inputTitle = document.querySelector("#title").value;
  const inputAuthor = document.querySelector("#author").value;
  const inputPages = document.querySelector("#pages").value;
  const inputIsRead = document.querySelector("#isRead").checked;
  const book = document.querySelector(".book");

  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const isRead = document.createElement('button');

  title.textContent = inputTitle;
  author.textContent = inputAuthor;
  pages.textContent = inputPages;
  isRead.textContent = inputIsRead;

  bookData = document.createElement("li");

  bookData.appendChild(title);
  bookData.appendChild(author);
  bookData.appendChild(pages);
  bookData.appendChild(isRead);

  book.appendChild(bookData);

  hideAddBookForm();
};

addbook.addEventListener("click", showAddBookForm);
close.addEventListener("click", hideAddBookForm);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addNewBook();
});
