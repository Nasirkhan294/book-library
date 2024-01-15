const addbook = document.querySelector('.add-btn');
const close = document.querySelector('.fa-times');
const form = document.querySelector('form');


const showAddBookForm = () => {
    form.reset();
    form.style.display = 'flex'
    addbook.style.display = 'none';
}

const hideAddBookForm = () => {
    form.style.display = 'none'
    addbook.style.display = 'block';
}

const addNewBook = () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const isRead = document.querySelector("#isRead").checked;

    console.log('Book Data:', {title, author, pages, isRead})

    hideAddBookForm();

}

addbook.addEventListener('click', showAddBookForm);
close.addEventListener('click', hideAddBookForm);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    addNewBook();
});