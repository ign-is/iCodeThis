const close = document.querySelectorAll('.close');

close.forEach((element, index) => {
    element.addEventListener('click', () => {
        element.parentNode.style.display =  'none';
        console.log('clicked')
    })
});