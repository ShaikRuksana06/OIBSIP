let pendingTasks = [];
let completedTasks = [];
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  const currentDate = new Date().toLocaleString();

  if (taskText !== '') {
    const task = { text: taskText, date: currentDate };
    pendingTasks.push(task);
    renderTasks();
    taskInput.value = ''; 
  }
}

function renderTasks() {
  const pendingTasksList = document.getElementById('pendingTasksList');
  const completedTasksList = document.getElementById('completedTasksList');

  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  pendingTasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${task.text} <br><small>Added on: ${task.date}</small></span>
      <div class="task-actions">
        <button class="complete-btn" onclick="markComplete(${index})">Complete</button>
        <button class="delete-btn" onclick="deleteTask(${index}, 'pending')">Delete</button>
      </div>
    `;
    pendingTasksList.appendChild(taskItem);
  });

  completedTasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('completed');
    taskItem.innerHTML = `
      <span>${task.text} <br><small>Completed on: ${task.date}</small></span>
      <div class="task-actions">
        <button class="delete-btn" onclick="deleteTask(${index}, 'completed')">Delete</button>
      </div>
    `;
    completedTasksList.appendChild(taskItem);
  });
}
function markComplete(index) {
  const task = pendingTasks[index];
  const currentDate = new Date().toLocaleString();
  task.date = currentDate; 
  completedTasks.push(task);
  pendingTasks.splice(index, 1); 
  renderTasks();
}
function deleteTask(index, type) {
  if (type === 'pending') {
    pendingTasks.splice(index, 1);
  } else {
    completedTasks.splice(index, 1);
  }
  renderTasks();
}
