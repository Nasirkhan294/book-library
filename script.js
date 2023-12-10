const addbook = document.querySelector('.add-btn');
const form = document.querySelector('form');


addbook.addEventListener('click', () => {
    form.style.display = 'flex'
    addbook.style.display = 'none';
})