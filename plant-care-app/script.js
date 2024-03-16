const signUp = document.querySelector('.front button');
const logIn = document.querySelector('.front a');
const front = document.querySelector('.front');
const your = document.querySelector('.your-plant');

signUp.addEventListener('click', signLog);
logIn.addEventListener('click', signLog);

function signLog() {
    front.style.display = 'none';
    your.style.display = 'block';
    your.style.marginLeft = '445px';
}