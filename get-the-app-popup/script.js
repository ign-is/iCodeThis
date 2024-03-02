const close = document.querySelector('.fa-xmark');
const app = document.querySelector('.get-the-app');

close.addEventListener('click', () => {
    app.style.display = 'none';
})