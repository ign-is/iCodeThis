const plusNum = document.querySelector('.plus-num');
const minus = document.querySelector('.minus');
const number = document.querySelector('.number');
const clock = document.querySelector('.clock');
const container = document.querySelector('.container');
const plus = document.querySelector('.plus');
const save = document.querySelector('.save');
const log = document.querySelector('.log');

plusNum.addEventListener('click', changeUp);
minus.addEventListener('click', changeDown);
plus.addEventListener('click', add);
save.addEventListener('click', saveHour);

let num = 1;

function changeUp() {
    num++;
    number.innerText = num;
}

function changeDown() {
    if(num >= 1) {
        num--;
    }
    number.innerText = num;
}

function add() {
    clock.style.display = 'none';
    container.style.display = 'block';
}

function saveHour() {
    container.style.display = 'none';
    let message = `<h3 class="message">${num} overworked ${num > 1 ? 'hours' : 'hour'} logged</h3>`;
    log.insertAdjacentHTML('beforeend', message);
    plus.style.display = 'none';
}