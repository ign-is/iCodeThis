const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const check = document.querySelector('.check');

emailForm.addEventListener("submit", function(event) {
   event.preventDefault();
   checked();

   if(check.checked) {
        if( /(.+)@(.+){2,}\.(.+){2,}/.test(emailInput.value)){
            alert("Email is valid!");
        } else {
            alert("Sorry, this email address is invalid")
        }
   }
});

function checked() {
    if(!check.checked) {
        alert('You have to agree with the terms and services')
    }
}



