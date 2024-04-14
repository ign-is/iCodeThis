const linkedIn = document.querySelector('.in');
const profile = document.querySelector('.profile');
const nav = document.querySelector('nav');
const navImage = document.querySelector('nav img');
const chat = document.querySelector('.chat');
const bell = document.querySelector('.bell');


let booleanProfile = false;
let booleanChat = false;

linkedIn.addEventListener('click', () => {
    linkedIn.style.opacity = 0;
    nav.style.opacity = 1;
})

bell.addEventListener('click', () => {
    if(!booleanChat) {
        chat.style.opacity = 1;
        chat.style.marginTop = '0px';
        booleanChat = true;
    } else {
        chat.style.opacity = 0;
        chat.style.marginTop = '-740px';
        booleanChat = false;
    }
})

navImage.addEventListener('click', () => {
    if(!booleanProfile) {
        profile.style.top = '110px';
        booleanProfile = true;
    } else {
        profile.style.top = '-700px';
        booleanProfile = false;
    }
})