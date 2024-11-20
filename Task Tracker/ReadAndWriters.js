const fs = require('node:fs');

const path = 'tasks.json'; 

const readFile = () => {
    try {
        let res = fs.readFileSync(path, "utf-8",);
        if (!fs.existsSync(path)) {
            return []; // return empty if file doesnt exist.
        }
        if (res) {
         return JSON.parse(res); // response parser.
        }
        else {
            return [];
        }
    }
    catch (e) {
        console.error('error', e.message);
        return []; // return empty array to prevent app crashes.
    }
}
const writeFile = (task) => {
    try {
        fs.writeFileSync(path, JSON.stringify(task, null, 2), 'utf-8'); 
    } catch (error) {
        console.error('Error writing to file:', error.message);
    }
};

module.exports = {
    readFile,
    writeFile  
};