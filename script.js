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

addbook.addEventListener('click', showAddBookForm);
close.addEventListener('click', hideAddBookForm);