const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const showAllBtn = document.getElementById("showAllBtn");
const showCompletedBtn = document.getElementById("showCompletedBtn");
const showUncompletedBtn = document.getElementById("showUncompletedBtn");

let tasks = [];

function renderTasks(filter = "all") {
  taskList.innerHTML = "";
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "uncompleted") return !task.completed;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task";
    if (task.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("dblclick", () => editTask(index));

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Отменить" : "Выполнить";
    completeBtn.addEventListener("click", () => toggleTaskCompletion(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    taskInput.value = "";
    renderTasks();
  }
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Редактировать задачу:", tasks[index].text);
  if (newText !== null) {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

addTaskBtn.addEventListener("click", addTask);
showAllBtn.addEventListener("click", () => renderTasks("all"));
showCompletedBtn.addEventListener("click", () => renderTasks("completed"));
showUncompletedBtn.addEventListener("click", () => renderTasks("uncompleted"));
