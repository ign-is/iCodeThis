const completed = document.querySelector('.completed-todos');
const plus = document.querySelector('.plus');
const add = document.querySelector('.add');
const btnAdd = document.querySelector('.btn-add');
const input = document.querySelector('input');
const todos = document.querySelector('.todos');
const number = document.querySelector('.number');

let array = [];

plus.addEventListener('click', () => {
    add.style.display = 'flex';
    console.log('click')
})

btnAdd.addEventListener('click', () => {
    let newTodo = document.createElement('label');
    newTodo.classList.add('container');
    newTodo.innerText = input.value;
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', filterTodos);
    let span = document.createElement('span');
    span.classList.add('checkmark');

    newTodo.appendChild(checkbox);
    newTodo.appendChild(span);
    array.push(newTodo);

    filterTodos();
    input.value = '';
    add.style.display = 'none';

});

function filterTodos() {
    array.forEach(item => {
        if(item.children[0].checked) {
            completed.appendChild(item)
            number.innerText = Number(completed.children.length);
        } else {
            todos.appendChild(item);
        }
    })
}





