const minus = document.querySelector('.btn-minus');
const plus = document.querySelector('.btn-plus');
const number = document.querySelector('.num');
const prices = document.querySelectorAll('.prices > div');
const x = document.querySelector('.fa-xmark');
const modal = document.querySelector('.gift-choice');

minus.addEventListener('click', chosePirceMinus);
plus.addEventListener('click', chosePricePlus);
x.addEventListener('click', close);

function close() {
    modal.style.display = 'none';
}

let index = 0;

function chosePricePlus() {

    if (index >= 0 || index <= 5) {
        prices[index].classList.add('selected');
        
        number.innerText = `${prices[index].innerText}`;
        console.log(index)
    }

    if (index != 0) {
        prices[index - 1].classList.remove('selected');
    }

    if (index < 5) {
        index++;
    } 

}

function chosePirceMinus() {

   if (index > 0 && index < 6) {
    prices[index].classList.remove('selected');
    prices[index - 1].classList.add('selected');
    number.innerText = `${prices[index - 1].innerText}`;
    index--;
   }

   if (index === 0) {
    index = 1;
   }

}

chosePricePlus();