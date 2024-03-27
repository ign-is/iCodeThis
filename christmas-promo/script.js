const x = document.querySelector('.fa-xmark');
const container = document.querySelector('.container');

x.addEventListener('click', () => {
    container.style.display = 'none';
});