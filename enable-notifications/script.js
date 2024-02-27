const closeUp = document.querySelector('.notifications-up .fa-xmark');
const closeDown = document.querySelector('.notifications-down .fa-xmark');
const up = document.querySelector('.notifications-up');
const down = document.querySelector('.notifications-down');

closeUp.addEventListener('click', closeU);
closeDown.addEventListener('click', closeD);

function closeU() {
    up.style.display = 'none';
}

function closeD() {
    down.style.display = 'none';
}