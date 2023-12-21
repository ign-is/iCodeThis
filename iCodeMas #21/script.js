const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const x = document.querySelectorAll('.fa-xmark');

questions.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(getComputedStyle(answers[index]).display == 'none') {
            questions[index].style.backgroundColor = 'white';
            x[index].style.rotate = '0deg';
            answers[index].style.display = 'block';
        } else {
            questions[index].style.backgroundColor = '#F9FBFC';
            x[index].style.rotate = '135deg';
            answers[index].style.display = 'none';
        }
    })
})