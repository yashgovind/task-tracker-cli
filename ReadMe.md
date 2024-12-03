### Task Tracker CLI

This is a simple CLI application that allows you to add, delete, update, and mark tasks.

## Functions 
``` bash
# Adding a new task 
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark inProgress 1
task-cli mark done 1
task-cli mark todo 2

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list inProgress
```

## Installation

#### Clone the repository
``` bash
git clone https://github.com/yashgovind/task-tracker-cli
```

#### Install dependencies
``` bash
npm install
```

#### Run the application
``` bash
node cli.js <command> [options]
```

#### Use the help command to get more information
``` bash
node cli.js help
```

## Contributing
Feature requests, bug reports, and pull requests are welcome. Feel free to open an issue or submit a pull request.
