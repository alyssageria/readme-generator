//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
// Array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "title"
}, {
    type: "input",
    message: "What was the purpose and motivation behind this project?",
    name: "description"
}, {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation"
}, {
    type: "input",
    message: "Please provide any instructions and examples for use.",
    name: "usage"
}, {
    type: "input",
    message: "Are there any other contributers to the project?",
    name: "contribution"
}, {
    type: "input",
    message: "Please provide test instructions for your application",
    name: "tests"
}, {
    type: "list",
    message: "Please select the license used for this project.",
    name: "license",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "BSD2", "BSD3", "none"]
}, {
    type: "input",
    message: "What is your github username?",
    name: "username"
}, {
    type: "input",
    message: "What is your email address?",
    name: "email"
}

];

// Function to create a README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md created!')
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data);
        })
}

// Function call to initialize app
init();
