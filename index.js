// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title? (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description? (Required)'
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'What are the installation instructions? (Required)',
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'What is the usage information? (Required)',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What are the contribution guidelines? (Required)',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What is your name? (Required)',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers)
        var str = generateMarkdown(answers)
        console.log(str)
    }) 
 }

// Function call to initialize app
init();
