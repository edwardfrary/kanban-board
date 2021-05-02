var taskSelector = "";
var buttonEl = document.querySelector("#save-task");
var listEl = document.querySelector("#list");
var addItemEl = document.createElement("li");

buttonEl.addEventListener("click", function () {
    var taskSelector = prompt("What is the task?");
    addItemEl.textContent = taskSelector;
    addItemEl.className = "task-item";
    listEl.appendChild(addItemEl);
    console.log = (taskSelector);
});

