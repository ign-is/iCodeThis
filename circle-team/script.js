const str = 'Petter Buffet - Back End Developer';
const text = document.getElementById('text');
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
const modes = document.querySelector('.light-dark');
const icons = document.querySelectorAll('.light-dark i');
const crafted = document.querySelector('.crafted');
const body = document.body;

window.onload = () => {
    for (let i = 0; i < str.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = str[i];
        text.appendChild(span);
        span.style.transform = `rotate(${6*i}deg)`;
    }
}

let lightDarkBoolean = true;

function lightDark() {
    if (lightDarkBoolean) {
        icons[0].style.backgroundColor = 'transparent';
        icons[1].style.backgroundColor = 'white';
        body.style.backgroundColor = '#1c1a26';
        crafted.style.color = 'white';
        lightDarkBoolean = false;
    } else {
        icons[0].style.backgroundColor = 'white';
        icons[1].style.backgroundColor = 'transparent';
        body.style.backgroundColor = 'white';
        crafted.style.color = '#1c1a26';
        lightDarkBoolean = true;
    }
}

modes.addEventListener('click', lightDark);
