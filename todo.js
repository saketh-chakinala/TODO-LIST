// script.js
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('task');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  taskItem.appendChild(taskContent);

  const checkIcon = document.createElement('img');
  checkIcon.src = 'check-icon.png'; // Path to your "check" icon image
  checkIcon.alt = 'Mark as completed';
  checkIcon.addEventListener('click', () => {
    taskContent.classList.toggle('completed');
  });
  taskItem.appendChild(checkIcon);

  const deleteIcon = document.createElement('img');
  deleteIcon.src = 'trash-icon.png'; // Path to your "trash" icon image
  deleteIcon.alt = 'Delete task';
  deleteIcon.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
  taskItem.appendChild(deleteIcon);

  taskList.appendChild(taskItem);
  taskInput.value = '';
}
