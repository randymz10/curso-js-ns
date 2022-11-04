const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
    const todoList = document.querySelector('#todo-list');
    const todosTemplate = todos.map(todoElement => `<li>${todoElement}</li>`);
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento);
            todos.splice(i, 1);
            actualizaTodos(todos);
            render();
        });
    });
}

const actualizaTodos = (todos) => {
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem('todos', todoStrings);
}

render();
const form = document.querySelector('#todo-form');
form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.querySelector('#todo');
    const todoText = todo.value;
    todo.value = '';
    todos.push(todoText);
    actualizaTodos(todos);
    render();
}