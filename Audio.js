/*function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
       
        li.textContent = taskText;

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}*/