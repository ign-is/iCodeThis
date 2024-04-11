const eye = document.querySelector('.pass-eye > i:last-of-type');
const pass = document.getElementById('password');
const lock = document.querySelector('.fa-lock');
const reset = document.querySelector('.reset');
const check = document.querySelector('.switch > input');
const btn = document.querySelector('.btn');
const welcome = document.querySelector('.welcome');
const h1 = document.querySelector('.welcome h1');
const inner = document.querySelector('.inner-container');

eye.addEventListener('click', showPass);
reset.addEventListener('click', resetPass);
btn.addEventListener('click', (e) => {
    e.preventDefault();
    inner.style.opacity = '0';
    welcome.style.top = '26px';
    welcome.style.opacity = '1';
    setTimeout(() => {
        h1.style.textShadow = '4px 4px 1px rgba(231, 142, 39, 0.7)';
    }, 1200);
    
})

function showPass() {
    if(eye.classList.contains('fa-eye-slash')) {
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
        lock.classList.remove('fa-lock');
        lock.classList.add('fa-unlock');
        lock.style.color = '#fbc65e';
        pass.type = 'text';
    } else {
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
        lock.classList.remove('fa-unlock');
        lock.classList.add('fa-lock');
        lock.style.color = '#e78c27';
        pass.type = 'password';
    }
}

function resetPass() {
    pass.value = '';
}
