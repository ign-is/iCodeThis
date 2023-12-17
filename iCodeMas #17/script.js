const products = document.getElementsByClassName('product');
let input = document.querySelector('input');
const close = document.querySelector('.fa-xmark');
const section = document.querySelector('section');
const number = document.querySelector('.number');

input.addEventListener("input", (e) => {
    let value = e.target.value
    let num = [];
    if(value == '') {
        Array.from(products).forEach(element => {
            element.style.display = "none";
            num = [];
        });
    }

    if (value && value.trim().length > 0){
        value = value.trim().toLowerCase();

        for (let i = 0; i < products.length; i++) {  
            if (!products[i].childNodes[1].childNodes[3].innerText.toLowerCase().includes(value)) { 
                products[i].style.display="none"; 
            } 
            else { 
                products[i].style.display="flex";                  
            } 
        } 
    } 

    num = Array.from(products).map(item => {
        if(item.style.display.toString() == 'flex') {
            return item;
        } 
    }).filter(item => item !== undefined);

    number.innerText = `(${num.length})`;
});


close.addEventListener('click', () => {
    section.style.display = "none";
})