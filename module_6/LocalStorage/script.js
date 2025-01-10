const nameInput = document.getElementById("nameInput");
const saveNameBtn = document.getElementById("saveNameBtn");
const nameDisplay = document.getElementById("nameDisplay");

function saveName() {
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem("userName", name);
    displaySavedName();
  }
}

function displaySavedName() {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    nameDisplay.textContent = `Сохранённое имя: ${savedName}`;
  } else {
    nameDisplay.textContent = "";
  }
}

saveNameBtn.addEventListener("click", saveName);

// Отображение имени при загрузке страницы
displaySavedName();
