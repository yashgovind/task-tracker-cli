const { printer, showHelp } = require("./helper");
const {
  addTask,
  deleteTask,
  listByStatus,
  updateTask,
  ListAllTasks,
  markByStatus,
} = require("./todo_main");

// CLI Logic
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No command provided. Use 'help' to see the available commands.");
  showHelp();
} else {
  const command = args[0];

  switch (command) {
    case "add": {
      const taskDesc = args.slice(1).join(" "); // Allow multi-word tasks
      if (!taskDesc) {
        console.log("Please provide a task description.");
      } else {
        addTask(taskDesc);
        console.log(`Task added: ${taskDesc}`);
      }
      break;
    }

    case "delete": {
      const taskId = parseInt(args[1], 10);
      if (isNaN(taskId)) {
        console.log("Please provide a valid numeric task ID to delete.");
      } else {
        deleteTask(taskId);
      }
      break;
    }

    case "update": {
      const [taskId, ...descParts] = args.slice(1); // Extract ID and description
      const newDesc = descParts.join(" ");
      if (!taskId || !newDesc) {
        console.log("Please provide both task ID and the new description.");
      } else {
        console.log(updateTask(parseInt(taskId, 10), newDesc));
      }
      break;
    }

    case "list": {
      const [status] = args.slice(1);
      if (status) {
        listByStatus(status);
      } else {
        ListAllTasks();
      }
      break;
    }

    case "mark": {
      const [status, taskId] = args.slice(1);
      if (!status || !taskId) {
        console.log("Please provide both a status and task ID to mark.");
      } else {
        console.log(markByStatus(status, parseInt(taskId)));
      }
      break;
    }

    case "help": {
      showHelp();
      break;
    }

    default: {
      console.log(
        `Unknown command: ${command}. Use 'help' for a list of commands.`
      );
      showHelp();
    }
  }
}
