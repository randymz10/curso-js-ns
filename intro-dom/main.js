const todos = [];

const render = () => {
    const todoList = document.querySelector('#todo-list');
    const todosTemplate = todos.map(todoElement => `<li>${todoElement}</li>`);
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento);
            todos.splice(i, 1);
            render();
        });
    });
}

const form = document.querySelector('#todo-form');
form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.querySelector('#todo');
    const todoText = todo.value;
    todo.value = '';
    todos.push(todoText);
    render();
}