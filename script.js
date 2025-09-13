const taskList = document.getElementById("task-list");

function addTask() {
  const task = document.getElementById("task").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (task === "" || date === "" || time === "") return alert("Fill all fields!");

  const taskObj = { task, date, time };
  saveTask(taskObj);
  displayTasks();
}

function saveTask(taskObj) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  taskList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${t.task}</strong> - Due: ${t.date}, Est: ${t.time}h
      <button onclick="deleteTask(${i})">❌</button>
    `;
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

displayTasks();
