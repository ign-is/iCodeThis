const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const btnSignIn = document.querySelector('.sign-btn-sign-in');
const btnSignUp = document.querySelector('.sign-btn-sign-up');

btnSignIn.addEventListener('click', signInFunc);
btnSignUp.addEventListener('click', signUpFunc);

function signInFunc() {
    signUp.style.display = 'block';
    btnSignUp.style.backgroundColor = 'transparent';
    btnSignUp.style.color = 'white';
   
    signIn.style.display = 'none';
    btnSignIn.style.backgroundColor = 'white';
    btnSignIn.style.color = 'rgb(106, 204, 192)';
}

function signUpFunc() {
    signUp.style.display = 'none';
    btnSignUp.style.backgroundColor = 'white';
    btnSignUp.style.color = 'rgb(106, 204, 192)';
   
    signIn.style.display = 'block';
    btnSignIn.style.backgroundColor = 'transparent';
    btnSignIn.style.color = 'white';
}