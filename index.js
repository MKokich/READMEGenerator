// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions =[
    {
      type: 'input',
      message: 'What is the project title? ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What are the table of contents?',
      name: 'table of contents',
    },
    {
      type: 'input',
      message: 'What is the description?', 
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is the installation?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is the usage?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Are there any licenses?',
      name: 'license',
    },
    {
      type: 'input',
      message: 'What are the contributions?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What are the tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Are there any questions?',
      name: 'questions',
    },
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
// Main function
function init() {
    inquirer.prompt(questions)
    .then(function(answers){
      
      const content = generateMarkdown(answers);
      
      writeToFile("README2.md", content)
    })
  

    
}

// Function call to initialize app
init();





