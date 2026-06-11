function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        taskItem.appendChild(checkbox);
        taskInput.value = '';

      checkbox.addEventListener('change', function boxCheck() {
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
        taskText.style.opacity = '0.6'; // optional
    } else {
        taskText.style.textDecoration = 'none';
        taskText.style.opacity = '1';
    }
});

const editBtn = document.createElement('button');
editBtn.textContent = 'Edit';
editBtn.className = 'edit-btn';

taskItem.appendChild(editBtn);

editBtn.addEventListener('click', function() {
    const newTaskText = prompt('Edit task:', taskText.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskText.textContent = newTaskText;
    }
});
    }
} 

 
