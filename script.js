
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
}