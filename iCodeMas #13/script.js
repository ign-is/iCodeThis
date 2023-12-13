let message = document.querySelector('#send-message'); 
const button = document.querySelector('button');
const userMessage = document.querySelector('.user-message');

button.addEventListener('click', send);
document.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
    send();
  }
});

function send() {
    const element = document.createElement("h4");
    element.innerText = message.value;
    userMessage.insertAdjacentElement('beforeend', element);
    message.value = '';
}

