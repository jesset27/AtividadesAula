let todoList = [];
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', function() {
  if (input.value !== '') {
    addTodo();
  }
});

input.addEventListener('keypress', function(event) {
  if (input.value !== '' && event.keyCode === 13) {
    addTodo();
  }
});

function addTodo() {
  todoList.push(input.value);
  input.value = '';
  renderList();
}

function removeTodo(index) {
  todoList.splice(index, 1);
  renderList();
}

function moveTodo(index, direction) {
  if (direction === 'up' && index !== 0) {
    const temp = todoList[index];
    todoList[index] = todoList[index - 1];
    todoList[index - 1] = temp;
  } else if (direction === 'down' && index !== todoList.length - 1) {
    const temp = todoList[index];
    todoList[index] = todoList[index + 1];
    todoList[index + 1] = temp;
  }
  renderList();
}

function renderList() {
  list.innerHTML = '';

  todoList.forEach(function(todo, index) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = todo;
    li.appendChild(span);

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remover';
    removeBtn.addEventListener('click', function() {
      removeTodo(index);
    });
    li.appendChild(removeBtn);

    const upBtn = document.createElement('button');
    upBtn.innerText = '▲';
    upBtn.disabled = (index === 0);
    upBtn.addEventListener('click', function() {
      moveTodo(index, 'up');
    });
    li.appendChild(upBtn);

    const downBtn = document.createElement('button');
    downBtn.innerText = '▼';
    downBtn.disabled = (index === todoList.length - 1);
    downBtn.addEventListener('click', function() {
      moveTodo(index, 'down');
    });
    li.appendChild(downBtn);

    list.appendChild(li);
  });
}

renderList();