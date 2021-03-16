const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs")

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
      type: 'list',
      message: 'Choose your license',
      name: 'license',
      choices: ["MIT", "GNU", "Apache", "ISC"]
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


function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

function init() {
    inquirer.prompt(questions)
    .then(function(answers){
      
      const content = generateMarkdown(answers);
      
      writeToFile("README2.md", content)
    })
  

    
}


init();





