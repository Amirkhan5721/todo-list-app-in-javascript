
function addTask() {
    var taskInput = document.querySelector("#taskInput");
    var taskList = document.querySelector("#taskList");

    /* Create a li element*/
    var li = document.createElement("li");
    li.textContent = taskInput.value;

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-Btn";
    removeButton.onclick = function () {
        taskList.removeChild(li);       
    }

    li.onClick = function () {
        li.classList.toggle('completed');
    };
        /* append the remove button to the list item */
        li.appendChild(removeButton);

        /* append the list item to the task list */
        taskList.appendChild(li);

        taskInput.value = '';
}