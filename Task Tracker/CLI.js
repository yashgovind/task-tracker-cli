const { addTask, deleteTask, updateTask, listByStatus, ListAllTasks, markByStatus } = require('./taskManager');
const { printer } = require('./printer');

// Parse CLI arguments.
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case 'add':
        const desc = args.slice(1).join(' ');
        if (desc) {
            addTask(desc);
            printer(`Task added: "${desc}"`);
        } else {
            printer('Please provide a description for the new task.');
        }
        break;

    case 'delete':
        const deleteId = parseInt(args[1]);
        if (!isNaN(deleteId)) {
            deleteTask(deleteId);
        } else {
            printer('Please provide a valid ID to delete.');
        }
        break;

    case 'update':
        const updateId = parseInt(args[1]);
        const newDesc = args.slice(2).join(' ');
        if (!isNaN(updateId) && newDesc) {
            const message = updateTask(updateId, newDesc);
            printer(message);
        } else {
            printer('Please provide a valid ID and a new description.');
        }
        break;

    case 'list':
        ListAllTasks();
        break;

    case 'mark':
        const status = args[1];
        const markId = parseInt(args[2]);
        if (status && !isNaN(markId)) {
            const message = markByStatus(status, markId);
            printer(message);
        } else {
            printer('Please provide a valid status and ID to mark the task.');
        }
        break;

    case 'status':
        const filterStatus = args[1];
        if (filterStatus) {
            const message = listByStatus(filterStatus);
            printer(message);
        } else {
            printer('Please provide a status to filter tasks.');
        }
        break;

    case 'help':
    default:
        showHelp();
        break;
}
