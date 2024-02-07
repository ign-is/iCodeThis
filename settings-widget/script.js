const elipsis = document.querySelector('.elipsis');
const ul = document.querySelector('ul');


elipsis.addEventListener('click', () => {
    if (window.getComputedStyle(ul, null).display == 'block') {
        ul.style.display = 'none';
        console.log('no block')
    } else {
        ul.style.display = 'block';
        console.log('block')
    }

});