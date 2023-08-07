document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    let taskNumber = 1;

    addButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.classList.add("task");

            const taskContent = document.createElement("div");
            taskContent.classList.add("task-content");
            taskContent.textContent = `${taskNumber}. ${taskText}`;

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete");
            deleteButton.innerHTML = "&#128465;"; // Trash can emoji
            deleteButton.addEventListener("click", deleteTask);

            const dateStamp = document.createElement("div");
            dateStamp.classList.add("date");
            dateStamp.textContent = getFormattedDate();

            taskItem.appendChild(taskContent);
            taskItem.appendChild(deleteButton);
            taskItem.appendChild(dateStamp);
            taskList.appendChild(taskItem);

            taskInput.value = "";
            taskNumber++;
        }
    }

    function deleteTask(event) {
        const taskItem = event.target.closest(".task");
        if (taskItem) {
            taskList.removeChild(taskItem);
        }
    }

    function getFormattedDate() {
        const now = new Date();
        return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    }

    taskList.addEventListener("click", function (event) {
        const taskItem = event.target.closest(".task");
        if (taskItem) {
            taskItem.classList.toggle("completed");
        }
    });
});
