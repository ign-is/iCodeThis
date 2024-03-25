const container = document.querySelector('.container');
const progressOne = document.querySelector('.progress-one');
const progressTwo = document.querySelector('.progress-two');
const progressThree = document.querySelector('.progress-three');
const rateNum = document.querySelector('.rate-num');
const tag = document.querySelector('.bar-two .tag');
const tagSpan = document.querySelector('.tag-span');
const h2 = document.querySelector('h2');

window.addEventListener('load',() => {

    let num = 0;
    const myInterval = setInterval(countNum, 30);

    function countNum() {
        num++;
        if (num <= 100) {
            h2.innerText = `${num}%`;
            tagSpan.innerText = `${num}%`;
            rateNum.innerHTML = `${num}%`;
            progressOne.style.width = `${num}%`;
            progressTwo.style.width = `${num}%`;
            progressThree.style.width = `${num}%`;
            tag.style.left = `calc(${num}% - 20px)`;
        }

        if(num == 100) {
            clearInterval(myInterval);
            container.style.boxShadow = '6px 14px 30px -3px rgba(131, 111, 255,0.5),-6px -14px 30px -3px rgba(21, 245, 186,0.6)';
        }
    }
    
});


