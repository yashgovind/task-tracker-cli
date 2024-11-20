
// const { read } = require('fs');
const { writeFile } = require('./ReadAndWriters');
const { readFile } = require("./ReadAndWriters");
//imports.

let tasks = []; //array of objects.
let id = 1;
let Status = {
     IsDone  : false,
     isToDo : false,
     isInProgress : false
}
// state variables.

// main functions .

// get maximum id. for unique id.
function getMaxId() {
    let max = 0;
    for (let i = 0; i < tasks.length; i++){
       max = Math.max(max, tasks[i].id); 
    }   return max;
}
// add task by id.
function addTask(desc) {
    tasks = readFile();
    const maxId = getMaxId();
    id = maxId + 1;
    const newStatus = { isDone: false, isToDo: true, isInProgress: false }; 
    const newTask = { id,desc,Status:newStatus};
    tasks.push(newTask);
    writeFile(newTask);
    id++;
}
// delete task by id
function deleteTask(id) {
    tasks = readFile();
    const initialLength = tasks.length;
    const task = tasks.filter(task=>task.id!==id); 
    tasks = task;
    if (tasks.length < initialLength) {
        writeFile(tasks);
        console.log(`task is deleted at the id ${id}`);
    }
    else{
        console.log(`task at id ${id} not found`);   
    }

}
// get task by its id
function getTaskByid(id){
    const task = tasks.find(task=>task.id===id); 
    return task;
}
//update task by id and desc
function updateTask(id, desc) {
   let tasks =  readFile();
 const task = getTaskByid(id);
 if(task){
     task.desc = desc;
     writeFile(tasks);
     return `Task with id ${id} has been updated to: "${desc}"`;
  }
  else{
    return `task at id ${id} not found `;
 }
}
// list all tasks
function ListAllTasks() {
     tasks = readFile();
    tasks.forEach((task, index) => {
        console.log(`Task at ${index + 1} is ${JSON.stringify(task, null, 2)}`);
    });
}
// mark tasks by its status
function markByStatus(status, id) {
 tasks =  readFile();
   const task = getTaskByid(id);
   if(task){
    // reset all status to false and set specified status to true only.
    task.Status.isDone = false;
    task.Status.isToDo = false;
    task.Status.isInProgress = false;
    // Set the specific status
       task.Status[status] = true;
       writeFile(tasks);
    return `task marked by status ${status} at id ${id}`;
    }
   else{
    return `task is not found at id ${id}`;
    };
}
// get tasks by its status.
function listByStatus(status) {
   tasks =  readFile();
 const taskByStatus = tasks.filter(task=>task.status===status); //filter tasks by status
    if (taskByStatus.length > 0) {
        writeFile(taskByStatus);
     return `Tasks found by status ${status}:\n${JSON.stringify(taskByStatus, null, 2)}`;
 }
 else{
    return `task not found with status ${status}`;
 }
}

// exporting modules.
module.exports = {
    addTask,
    deleteTask,
    listByStatus,
    updateTask,
    ListAllTasks,
    markByStatus
};

