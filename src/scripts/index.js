const taskFormElement = document.querySelector('.text-area__form');
const taskInputElement = taskFormElement.querySelector('.text-area__input'); 
const taskTemplateElement = document.querySelector('.tasks-list__template');
const taskListElement = document.querySelector('.tasks-list__container');
const cardListElement = document.querySelector('.elements__items'); 

const taskInitialElements = [
    {  
      name: 'Дочитать Мистер Вечный Канун', 
    },  
    {  
      name: 'Приготовить имбирное печенье',
    }  
]; 

function createTaskElement(text) {
    const taskElement = taskTemplateElement.content.cloneNode(true);

    taskElement.querySelector('.tasks-list__text').textContent = text;  
    taskElement.querySelector('.tasks-list__delete-button').addEventListener('click', handleTaskDelete);

    return taskElement;  
};

function handleTaskDelete (evt) {
    const itemElement = evt.target.closest('.tasks-list__item');  
    itemElement.remove(); 
};

function handleTaskFormSubmit (evt) {
    evt.preventDefault();  
    const taskText = taskInputElement.value; 
    createTaskElement(taskText);  
    taskListElement.prepend(createTaskElement(taskText));  
    evt.target.reset();
};

taskInitialElements.forEach((element) => {
    const taskInitialElement = createTaskElement(element.name);  
    taskListElement.prepend(taskInitialElement);  
});

taskFormElement.addEventListener('submit', handleTaskFormSubmit); 