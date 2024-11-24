const { printer, printTasksAsTable } = require("./helper");
const { writeToFile } = require("./read_and_write");
const { readFile } = require("./read_and_write");

let Status = {
  IsDone: false,
  isToDo: false,
  isInProgress: false,
};

// main functions .

/** Function to be called from cli to add a new task */
function addTask(desc) {
  const tasks = readFile();
  const newStatus = { done: false, todo: false, inProgress: false };
  const newTask = { desc, Status: newStatus };
  tasks.push(newTask);
  writeToFile(tasks);
}

/** Function to be called from cli to delete a task */
function deleteTask(index) {
  const tasks = readFile(); // Load tasks from file

  // Ensure the index is a number (if stored as a number in tasks)
  index = parseInt(index);

  // if the index is not -1, then delete the task
  if (index !== -1) {
    tasks.splice(index, 1);
    writeToFile(tasks);
  } else {
    console.log(`Task with ID=${index} not found.`);
    return;
  }
}

/** Function to be called from cli to get a task by its id */
function getTaskByid(index) {
  const tasks = readFile();
  index = parseInt(index);
  const task = tasks[index];
  if (task) return task;

  printer(`Task not found with id ${index}`);
}

/** Function to be called from cli to update a task */
function updateTask(index, desc) {
  const tasks = readFile();
  const task = tasks[index];
  if (task) {
    task.desc = desc;
    writeToFile(tasks);
    return `Task with id ${index} has been updated to: "${desc}"`;
  } else {
    return `task with id ${index} not found `;
  }
}

/** Function to be called from cli to list all tasks */
function ListAllTasks() {
  const tasks = readFile();

  if (tasks.length === 0) {
    printer("No tasks found. Use 'add' command to add a new task.");
    return;
  }

  printTasksAsTable(tasks);
}
// mark tasks by its status
function markByStatus(status, index) {
  if (status !== "done" && status !== "todo" && status !== "inProgress") {
    printer("Please provide a valid status. Use 'help' for more information.");
    return;
  }

  const tasks = readFile();
  const task = tasks[index];
  if (task) {
    // reset all status to false and set specified status to true only.
    task.Status.done = false;
    task.Status.todo = false;
    task.Status.inProgress = false;
    // Set the specific status
    task.Status[status] = true;
    writeToFile(tasks);
    return `task marked by status ${status} at id ${index}`;
  } else {
    return `task is not found at id ${index}`;
  }
}
// get tasks by its status.
function listByStatus(status) {
  if (status !== "done" && status !== "todo" && status !== "inProgress") {
    printer("Please provide a valid status. Use 'help' for more information.");
    return;
  }
  const tasks = readFile();

  const taskByStatus = tasks.filter((task) => {
    if (status === "done") return task.Status.done;
    else if (status === "todo") return task.Status.todo;
    else if (status === "inProgress") return task.Status.inProgress;
  }); //filter tasks by status
  if (taskByStatus.length > 0) {
    printTasksAsTable(taskByStatus);
  } else {
    printer(`task not found with status ${status}`);
  }
}

// exporting modules.
module.exports = {
  addTask,
  deleteTask,
  listByStatus,
  updateTask,
  ListAllTasks,
  markByStatus,
};
