// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What was the purpose and motivation behind this project?",
    name: "Description"
}, {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "Installation"
}, {
    type: "input",
    message: "Please provide any instructions and examples for use.",
    name: "Usage"
}, {
    type: "input",
    message: "Are there any other contributers to the project?",
    name: "Contribution"
}, {
    type: "input",
    message: "Please provide test instructions for your application",
    name: "Tests"
}, {
    type: "checkbox",
    message: "Please select the license used for this project.",
    name: "License",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "BSD2", "BSD3", "none"]
}, {
    type: "input",
    message: "What is your github username?",
    name: "Username"
}, {
    type: "input",
    message: "What is your email address?",
    name: "email"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md created!')
    );
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
