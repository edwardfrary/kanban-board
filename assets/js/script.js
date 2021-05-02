var taskSelector = "";
var buttonEl = document.querySelector("#save-task");
var listEl = document.querySelector("#list");


buttonEl.addEventListener("click", function () {
    var taskSelector = prompt("What is the task?");
    var addItemEl = document.createElement("li");
    addItemEl.textContent = taskSelector;
    addItemEl.className = "task-item";
    listEl.appendChild(addItemEl);
});

