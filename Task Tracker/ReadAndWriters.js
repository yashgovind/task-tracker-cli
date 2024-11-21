const fs = require('node:fs');

const path = 'tasks.json'; 

const readFile = () => {
    try {
        let res = fs.readFileSync(path, "utf-8",);
        if (res) {
            return JSON.parse(res);
        }
    }
    catch (e) {
        console.error('error', e.message); // return empty array to prevent app crashes.
    }
}
const writeFile = (task) => {
    try {
        let res = readFile();
        if (!res) {
            // if no response is coming. then response is an empty array.
            res = [];
        }
        res.push(task); // push the object in the response.
        fs.writeFileSync(path, JSON.stringify(res, null, 2), 'utf-8'); // write that object in the filepath by stringyfying.
    } catch (error) {
        console.error('Error writing to file:', error.message);
    }
};

module.exports = {
    readFile,
    writeFile  
};