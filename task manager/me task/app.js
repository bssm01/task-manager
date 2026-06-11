

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    if(taskInput.value.trim() !== "") {
        const taskItem = document.createElement("li");
        const taskText = document.createElement("span");
        const dltBtn = document.createElement("button");
        const edtBtn = document.createElement("button");
        const chkBox = document.createElement("input");
        chkBox.type = "checkbox";   
            chkBox.onchange = function() {
                if(chkBox.checked) {
                    taskText.style.textDecoration = "line-through";
                } else {
                    taskText.style.textDecoration = "none";
                }  }
        taskItem.appendChild(chkBox);
        edtBtn.textContent = "Edit";
        edtBtn.onclick = function() {
            const newTask = prompt("Edit your task:", taskText.textContent);
            if(newTask !== null) {
                taskText.textContent = newTask;
            }
        };
        edtBtn.className = "edt-btn";
        

        dltBtn.textContent = "Delete";
        dltBtn.onclick = function() {
            taskList.removeChild(taskItem);
        }
        dltBtn.className = "dlt-btn";
        


        taskText.textContent = taskInput.value;
        taskItem.className = "task-item";
        taskItem.appendChild(taskText);
        taskList.appendChild(taskItem);
        taskItem.appendChild(dltBtn);
        taskItem.appendChild(edtBtn);
        taskInput.value = "";
    }


}

