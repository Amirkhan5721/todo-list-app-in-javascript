
function addTask() {
    var taskInput = document.querySelector("#taskInput");
    var taskList = document.querySelector("#taskList");

    var listItem = document.createElement('li');
    listItem.textContent = taskInput.value;

}