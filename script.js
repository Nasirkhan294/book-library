const addbook = document.querySelector('.add-btn');
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
form.addEventListener('click', hideAddBookForm);