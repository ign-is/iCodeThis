const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const viewAll = document.querySelector('.header button');
const viewSpan = document.querySelector('.header button span');
const container = document.querySelector('.container');
const body = document.querySelector('body');

let currentSlide = 0;
let slideMedia = 0;
console.log(window.innerWidth)
function goToSlide(n) {
    slides.style.transform = `translateX(-${n * 211}px)`;
    currentSlide = n;
}

function nextSlide() {
    if(currentSlide != 8) {
        goToSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if(currentSlide != 0) {
        goToSlide(currentSlide - 1);
    }
}

let viewBoolean = true;

function view() {
    if(viewBoolean) {

        slides.style.transform = `translateX(0px)`;
        currentSlide = 0;

        body.style.paddingTop = '30px';
        body.style.paddingBottom = '30px';
        body.style.height = '100%';
    
        slides.style.flexWrap = 'wrap';
        slides.style.rowGap = '15px';
    
        container.style.height = 'fit-content';
        container.style.width = 'fit-content';
        container.style.paddingLeft = '20px';
        container.style.paddingRight = '20px';
    
        carousel.style.height = 'fit-content';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';

        viewSpan.innerText = 'View less';
        viewBoolean = false;

    } else {

        slides.style.transform = `translateX(0px)`;
        currentSlide = 0;

        body.style.paddingTop = '0px';
        body.style.paddingBottom = '0px';
        body.style.height = '100vh';

        slides.style.flexWrap = 'nowrap';
        slides.style.rowGap = '0px';

        container.style.height = '335px';
        container.style.width = 'fit-content';
        container.style.paddingLeft = '120px';
        container.style.paddingRight = '120px';

        prevBtn.style.display = 'inline';
        nextBtn.style.display = 'inline';

        viewBoolean = true;
        viewSpan.innerText = 'View all';
    }
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
viewAll.addEventListener('click', view);