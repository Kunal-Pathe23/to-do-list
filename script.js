// for counting the tasks 
const maxTasks = 5;

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskList.children.length >= maxTasks) {
        alert('Maximum number of tasks reached. You cannot add more tasks.');
        return;
    }

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="removeTask(this)">Remove</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}
// for completed task 
function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}
// for remove task 
function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
