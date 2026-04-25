const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.onclick = function () {

  if (taskInput.value.trim() === "") {
    alert("Enter something");
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = taskInput.value;
  
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  editBtn.onclick = function () {
    let newText = prompt("Edit task:", span.innerText);

    if (newText !== null && newText.trim() !== "") {
      span.innerText = newText;
    }
  };

  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  taskList.appendChild(li);
  taskInput.value = "";
};