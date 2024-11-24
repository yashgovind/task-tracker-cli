// printer func to print in console

const printer = (x) => {
  process.stdout.write(x + "\n");
};

function getStatusString(task) {
  if (task.Status.done) {
    return "Done ✅";
  } else if (task.Status.todo) {
    return "ToDO 📝";
  } else if (task.Status.inProgress) {
    return "In Progress 🚧";
  }
  return " - ";
}

function printTasksAsTable(tasks) {
  var transformed = [];
  for (var task of tasks) {
    transformed.push({
      Description: task.desc,
      Status: getStatusString(task),
    });
  }

  console.table(transformed);
}

function showHelp() {
  printer(`
        Usage:
        node cli.js <command> [options]
        
        Commands:
        add <description>           Add a new task with the given description
        delete <id>                 Delete a task by its ID
        update <id> <description>   Update the description of a task by its ID
        list                        List all tasks
        mark <status> <id>          Mark a task with a specific status (e.g., done, todo, in-progress)
        status <status>             List all tasks with a given status
        help                        Show this help message
        `);
}

module.exports = {
  printer,
  showHelp,
  getStatusString,
  printTasksAsTable,
};
