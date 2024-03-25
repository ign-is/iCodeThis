const code = document.querySelector('.container .code');
const copied = document.querySelector('.copied');

code.addEventListener('click', copiedCode);

function copiedCode() {
    copied.style.display = 'block';
    setTimeout(() => {
        copied.style.display = 'none';
    }, 2000);
}