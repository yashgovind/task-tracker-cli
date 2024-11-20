

// printer func to print in console

const printer = (x) => {
process.stdout.write(x + "\n");
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
        mark <status> <id>          Mark a task with a specific status (e.g., isDone, isToDo, isInProgress)
        status <status>             List all tasks with a given status
        help                        Show this help message
        `);
    }
    
  module.exports = {
        printer , showHelp
    }

    
    