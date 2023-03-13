const fs = require('fs'); //file system module will allow us to work with the file system on computer
const inquirer = require('inquirer'); //inquirer module will allow us to ask questions in the command line
const path = require('path'); //path module will allow us to work with file and directory paths
const generator = require('generator.js');

// array of questions for user
const questions = [
    {}
];

function write(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Generating README...");
        write("README.md", generator({ ...inquirerResponses }));
    });
}

init();