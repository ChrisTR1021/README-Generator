// Imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generator = require('./utils/generator');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'what kind of license should your project have?',
    choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None' ],
  },
  {
    type: 'input',
    name: 'require',
    message: 'List any project dependecies',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command do you run to install dependecies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command is run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repository?',
  },
   { 
    type: 'input',
    name: 'usage',
    message: 'What should the user know about repository?',
   },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// Function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
      console.log("Building Professional READMe. md File...")
      writeToFile('./dist/README.md', generator(response));
  });
}
// Function to call initialize app
init()