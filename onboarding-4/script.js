const one = document.querySelector('.point-one');
const two = document.querySelector('.point-two');
const three = document.querySelector('.point-three');
const section = document.querySelector('section');
const img = document.querySelector('.image');
let num = 2;

function skip() {
    if (num == 2) {
        num = 3;

        section.style.transition = "all 2s";
        three.style.backgroundColor = 'rgb(167, 119, 233)';
        section.style.backgroundColor = 'rgb(167, 119, 233)';
        img.src = "https://i.ibb.co/FY9wKfM/launch.png";

        one.style.backgroundColor = 'rgb(33, 50, 58)';
        two.style.backgroundColor = 'rgb(33, 50, 58)';
    } else if (num == 3) {
        num = 1;

        section.style.transition = "all 2s";
        one.style.backgroundColor = 'rgb(218, 72, 203)';
        section.style.backgroundColor = 'rgb(218, 72, 203)';
        img.src = "https://i.ibb.co/y0gYtWG/group-1.png";

        three.style.backgroundColor = 'rgb(33, 50, 58)';
        two.style.backgroundColor = 'rgb(33, 50, 58)'
    } else {
        num = 2;

        section.style.transition = "all 1s";
        two.style.backgroundColor = 'rgb(239, 51, 142)'
        section.style.backgroundColor = 'rgb(239, 51, 142)';
        img.src = "https://i.ibb.co/YLPT5r7/presentation.png";

        one.style.backgroundColor = 'rgb(33, 50, 58)';
        three.style.backgroundColor = 'rgb(33, 50, 58)';
    }
}