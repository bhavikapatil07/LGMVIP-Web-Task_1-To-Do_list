
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    return;
  }

  var taskItem = document.createElement("div");
  taskItem.className = "task";

  var taskLabel = document.createElement("label");
  taskLabel.innerHTML = taskInput.value;

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function() {
    taskList.removeChild(taskItem);
  };

  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  taskInput.value = "";
}