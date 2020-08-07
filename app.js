const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addToDo);

function addToDo(event){
  event.preventDefault();

  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('todo');

  const newToDo = document.createElement('ul');
  newToDo.innerText = 'Alo';
  newToDo.classList.add('todo-item');
  toDoDiv.appendChild(newToDo);

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class= "fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  toDoDiv.appendChild(completedButton);
  
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class= "fas fa-trash"></i>';
  deleteButton.classList.add('delete-btn');
  toDoDiv.appendChild(deleteButton);

  todoList.appendChild(toDoDiv);
}