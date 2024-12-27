const tasks = [];

function addTask(name) {
  if (!name.trim()) {
    console.log("Название задачи не может быть пустым.");
    return;
  }
  if (
    tasks.some((task) => task.name.toLowerCase() === name.trim().toLowerCase())
  ) {
    console.log(`Задача с названием "${name}" уже существует.`);
    return;
  }
  tasks.push({ name: name.trim(), completed: false });
  console.log(`Задача "${name}" добавлена.`);
}

function completeTask(name) {
  const task = tasks.find(
    (task) => task.name.toLowerCase() === name.trim().toLowerCase()
  );
  if (!task) {
    console.log(`Задача "${name}" не найдена.`);
    return;
  }
  task.completed = true;
  console.log(`Задача "${name}" отмечена как выполненная.`);
}

function deleteTask(name) {
  const taskIndex = tasks.findIndex(
    (task) => task.name.toLowerCase() === name.trim().toLowerCase()
  );
  if (taskIndex === -1) {
    console.log(`Задача "${name}" не найдена.`);
    return;
  }
  const deletedTask = tasks.splice(taskIndex, 1)[0];
  console.log(
    `Задача "${deletedTask.name}" удалена. Осталось задач: ${tasks.length}.`
  );
}

function showTasks() {
  if (tasks.length === 0) {
    console.log("Список задач пуст.");
    return;
  }

  console.log("Список задач:");
  tasks.forEach((task, index) => {
    console.log(
      `${index + 1}. ${task.name} - ${
        task.completed ? "Выполнена" : "Не выполнена"
      }`
    );
  });
}

addTask("Сделать домашнее задание");
addTask("Весело отметить новый год");
completeTask("сделать домашнее задание");
showTasks();
