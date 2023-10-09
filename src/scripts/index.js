const taskFormElement = document.querySelector(".text-area__form");
const taskInputElement = taskFormElement.querySelector(".text-area__input");
const taskTemplateElement = document.querySelector(".tasks-list__template");
const taskListElement = document.querySelector(".tasks-list__container");
const taskEmptyElement = document.querySelector(".tasks-zero");

const taskInitialElements = [
  {
    name: "Дочитать Мистер Вечный Канун",
  },
  {
    name: "Приготовить имбирное печенье",
  },
];

function createTaskElement(task) {
  const taskElement = taskTemplateElement.content.cloneNode(true);
  taskElement.querySelector(".tasks-list__text").textContent = task;
  taskElement
    .querySelector(".tasks-list__delete-button")
    .addEventListener("click", handleTaskDelete);
  return taskElement;
}

function handleTaskDelete(evt) {
  const itemElement = evt.target.closest(".tasks-list__item");
  itemElement.remove();
}

function handleTaskFormSubmit(evt) {
  evt.preventDefault();
  const task = taskInputElement.value;
  createTaskElement(task);
  taskListElement.prepend(createTaskElement(task));
  evt.target.reset();
}

taskInitialElements.forEach((task) => {
  const taskInitialElement = createTaskElement(task.name);
  taskListElement.prepend(taskInitialElement);
});

/*
if (taskListElement.children.length > 0) {
    taskEmptyElement.classList.add('tasks-zero_invisable');
}
*/
taskFormElement.addEventListener("submit", handleTaskFormSubmit);