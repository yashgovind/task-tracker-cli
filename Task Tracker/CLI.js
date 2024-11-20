const { printer, showHelp } = require("./helper");
const { addTask, deleteTask, listByStatus, updateTask, ListAllTasks, markByStatus } = require("./To-Do-Main");

// CLI Logic
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No command provided. Use 'help' to see the available commands.");
    showHelp();
} else {
    const command = args[0];
    const param = args[1];

    switch (command) {
        case 'add':
            if (!param) {
                console.log("Please provide a task to add.");
            } else {
                addTask(param);
                console.log(`Task added: ${param}`);
            }
            break;

        case 'delete':
            if (!param) {
                console.log("Please provide the task ID to delete.");
            } else {
                deleteTask(param);
                console.log(`Task deleted: ${param}`);
            }
            break;

        case 'update':
            if (!param) {
                console.log("Please provide the task ID to update.");
            } else {
                updateTask(param);
                console.log(`Task updated: ${param}`);
            }
            break;

        case 'list':
            console.log("Listing all tasks:");
            ListAllTasks();
            break;

        case 'mark':
            if (!param) {
                console.log("Please provide the status to filter tasks.");
            } else {
                markByStatus(param);
                console.log(`Tasks marked by status: ${param}`);
            }
            break;

        case 'help':
            showHelp();
            break;

        default:
            console.log(`Unknown command: ${command}. Use 'help' for a list of commands.`);
            showHelp();
    }
}


 
