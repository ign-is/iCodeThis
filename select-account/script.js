const dots = document.querySelectorAll('.dots');
const options = document.querySelectorAll('.options');


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const value = getComputedStyle(options[index])
        if(value.display == 'none') {
            options[index].style.display = 'flex';
        } else {
            options[index].style.display = 'none';
        }
    })
})
