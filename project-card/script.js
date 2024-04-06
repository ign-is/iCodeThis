const progress = document.querySelector('.progress');
const h3 = document.querySelector('.progress-bar h3:last-of-type');

window.addEventListener('load', () => {

    let num = 0;
    const myInterval = setInterval(countNum, 30);

    function countNum() {
        num++;
        if (num <= 43) {
            h3.innerText = `${num}%`;
            progress.style.width = `${num}%`;
        }
    }
});