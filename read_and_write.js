const fs = require("node:fs");

const path = "tasks.json";

const readFile = () => {
  try {
    let res = fs.readFileSync(path, "utf-8");
    if (res) {
      return JSON.parse(res);
    }
  } catch (e) {
    console.error("error", e.message); // return empty array to prevent app crashes.
    return [];
  }
};

const writeToFile = (data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data), "utf-8"); // write that object in the filepath by stringyfying.
  } catch (error) {
    console.error("Error writing to file:", error.message);
  }
};

module.exports = {
  readFile,
  writeToFile,
};
