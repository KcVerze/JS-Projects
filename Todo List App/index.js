// ✅ Save task
function saveTasks() {
  const tasks = [];

  document.querySelectorAll('#taskList li span').forEach(span => {
    tasks.push({
      text: span.textContent,
      completed: span.classList.contains('completed')
    });
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ✅ Load tasks
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  savedTasks.forEach(task => {
    createTask(task.text, task.completed);
  });
}

// Create task
function createTask(taskValue, isCompleted = false) {
  const input = document.getElementById('task-input');
// new task

  const li = document.createElement('li');

//the actual task container
  const taskText = document.createElement('span');
  taskText.textContent = taskValue;

  // Completed style if loaded - add the style when loaded
  if (isCompleted) {
    taskText.classList.add("completed");
  }

  // checked or unchecked

  taskText.onclick = function () {
    taskText.classList.toggle("completed");
    saveTasks(); // save checked
  };

  // Double-click to edit
  taskText.ondblclick = function () {
    input.value = taskText.textContent;
    li.remove();
    saveTasks(); // save edit
  };

  //  Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
    saveTasks(); // save delete
  };

  // assemble the li with the task text and delete btn
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  //to put the new task below the previous task

  document.getElementById('taskList').appendChild(li);
}

// Add new task
function add() {
  const input = document.getElementById('task-input');
  // remove white space
  const taskValue = input.value.trim();

  // if empty

  if (taskValue === '') {
    alert('Enter a new task');
    return;
  }

  createTask(taskValue);
  input.value = ''; // clear input
  saveTasks();      // save after adding
}

// Load tasks on page load
window.onload = loadTasks;
