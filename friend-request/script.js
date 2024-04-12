const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if(buttons[i].innerText == 'Confirm') {
            buttons[i].innerText = 'Confirmed';
        } else {
            buttons[i].innerText = 'Confirm';
        }
    })
}