const labels = document.querySelectorAll('label');
const skip = document.querySelector('.skip');
const btn = document.querySelector('.btn-submit');
const btnSpan = document.querySelector('.btn-submit > span');
const h2 = document.querySelector('h2');
const progress = document.querySelector('.progress');
const bar = document.querySelector('.bar');
const question = document.querySelector('.question');
const respond = document.querySelector('.respond');

let counter = 0;
const questions = [
    {
        title: 'Which of this is <q>You eat pasta?</q>',
        one: 'El caballo es pequeño',
        two: 'Tú comes pasta',
        three: 'Èl come pan'
    },
    {
        title: 'What does the word: <q>book</q> mean?',
        one: 'Libro',
        two: 'Borrador',
        three: 'Lapiz'
    },
    {
        title: 'How do you say <q>Good morning</q> in Spanish?',
        one: 'Buen día',
        two: 'Buenas tardes',
        three: 'Buenas noches'
    }
]


function spikQuestion() {


    if(counter == 2) {
        return;
    } else {
        progress.style.width += '66%';
        counter++;
    }

    
    h2.innerHTML = questions[counter].title;
    labels[0].innerHTML = `${questions[counter].one} 
    <input type="radio" name="radio">
    <span class="checkmark"></span>`;
    labels[1].innerHTML = `${questions[counter].two} 
    <input type="radio" name="radio">
    <span class="checkmark"></span>`;
    labels[2].innerHTML = `${questions[counter].three} 
    <input type="radio" name="radio">
    <span class="checkmark"></span>`;

    if (counter > 1) {
        progress.style.width = '100%';
    }
}

function submitQuestions() {
    question.style.display = 'none';
    skip.style.display = 'none';
    progress.style.display = 'none';
    bar.style.display = 'none';
    btn.style.marginTop = '0px';
    respond.style.paddingTop = '0px';
    btn.style.height = '100%';
    btnSpan.innerText = "Congratulation, you finished today's lesson";
}

btn.addEventListener('click', submitQuestions);
skip.addEventListener('click', spikQuestion);

