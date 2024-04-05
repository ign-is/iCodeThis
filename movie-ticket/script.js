const available = document.querySelectorAll('.middle-bottom .available-icon');
const number = document.querySelector('.number');
const total = document.querySelector('.total');


let numTickets = 0;
let totalPrice = 0;

for (let i = 0; i < available.length; i++) {
    available[i].addEventListener('click', () => select(i));
}

function totalCost() {
    number.innerText = `${numTickets}`;
    total.innerText = `$${numTickets * 10}`;
}

function select(i) {
    if(available[i].classList.contains('available-icon')) {
        available[i].classList.remove('available-icon');
        available[i].classList.add('selected-icon');
        numTickets += 1;
        totalCost();
    } else {
        available[i].classList.remove('selected-icon');
        available[i].classList.add('available-icon');
        numTickets--;
        totalCost();
    }  
}