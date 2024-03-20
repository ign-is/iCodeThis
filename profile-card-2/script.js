const li = document.querySelector('.card ul:first-of-type li:last-of-type');
const more = document.querySelector('.more');
const card = document.querySelector('.card');

li.addEventListener('click', appear);

let boolean = true;
function appear() {
    if(boolean) {
        li.style.backgroundColor = '#76ABAE';
        li.style.color = '#EEEEEE';
        more.style.display = 'block';
        card.style.marginRight = '-16px';
        boolean = false;
    } else {
        li.style.backgroundColor = '#EEEEEE';
        li.style.color = '#222831';
        more.style.display = 'none';
        card.style.marginRight = '0px';
        boolean = true;
    }
 
}