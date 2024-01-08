const checked = document.querySelectorAll('input');
const chapter = document.querySelectorAll('.chapter');
const number = document.querySelector('.number');
const circle = document.querySelector('.circle');


let numCheked = 0;
function borders() {
    if(numCheked == 0) {
        circle.style.borderLeft = '15px solid rgb(222, 220, 237)';
        circle.style.borderRight = '15px solid rgb(222, 220, 237)';
        circle.style.borderBotom = '15px solid rgb(222, 220, 237)';
        circle.style.borderTop = '15px solid var(222, 220, 237)';
        number.innerText ="0%"
        circle.style.border = '15px solid var(222, 220, 237)';
        circle.style.borderTop = '15px solid rgb(50, 47, 98)';
    }
     else if(numCheked == 1) {
    
        circle.style.border = '15px solid var(222, 220, 237)';
        circle.style.borderLeft = '15px solid rgb(222, 220, 237)';
        circle.style.borderRight = '15px solid rgb(222, 220, 237)';
        circle.style.borderBotom = '15px solid rgb(222, 220, 237)';
        circle.style.borderTop = '15px solid rgb(50, 47, 98)';
        number.innerText ="25%"
    } else if(numCheked == 2) {
  
        circle.style.border = '15px solid var(222, 220, 237)';
        circle.style.borderLeft = '15px solid rgb(222, 220, 237)';
        circle.style.borderRight = '15px solid rgb(50, 47, 98)';
        circle.style.borderBottom = '15px solid rgb(222, 220, 237)';
        circle.style.borderTop = '15px solid rgb(50, 47, 98)';
        number.innerText ="75%"

    } else if (numCheked == 3) {
  
        circle.style.border = '15px solid var(222, 220, 237)';
        circle.style.borderTop = '15px solid rgb(50, 47, 98)';
        circle.style.borderRight = '15px solid rgb(50, 47, 98)';
        circle.style.borderBottom = '15px solid rgb(50, 47, 98)';
        circle.style.borderLeft = '15px solid rgb(50, 47, 98)';
        number.innerText ="100%"
    } 
}


checked.forEach((item, index) => {
    item.addEventListener('change', (e) => {
        if(e.target.checked == true) {
            chapter[index].style.border = '2px solid rgb(50, 47, 98)';
            numCheked++;
        } else if (e.target.checked == false){
            chapter[index].style.border = '2px solid rgb(222, 220, 237)';
            numCheked--;
        } 

        borders();

    })

});