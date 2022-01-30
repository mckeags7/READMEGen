const inquirer = require('inquirer');
const fs = require('fs');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const generateMarkdown = require('./utils/generateMarkdown');

console.log("Welcome to the README Generator. Answer the next series of questions in the template to generate a README.");

inquirer.prompt([
     {
     type: 'input',
     name: 'title',
     message: '1. What is the title of your project?',
     },
     {
     type: 'input',
     name: 'motivation', 
     message: '2. What was the motivation for creating this project?',
     },
     {
     type: 'input',
     name: 'build',
     message: '3. Why did you build this project?',
     },
     {
     type: 'input',
     name: 'problem',
     message: '4. What problem does it solve?',
     },
     {
     type: 'input',
     name: 'learn',
     message: '5. What did you learn from this project?',
     },
     {
     type: 'input',
     name: 'standOut',
     message: '6. What makes your project stand out?',
     },
     {
     type: 'input',
     name: 'features',
     message: '7. What features does your project have?',
     },
     {
     type: 'input',
     name: 'git',
     message: '8. What is your GitHub username?',
     },
     {
     type: 'list',
     message: "9. Which license would you prefer to use? (Choose from list)",
     name: 'license',
     choices:[
     'Apache License 2.0',
     'Boost Software License 1.0',
     'The Unlicense', 
     'GNU AGPLv3', 
     'WTFPL',
     ],     
     }
])

.then(answers => {
     fs.writeFile('log.txt', (answers.title) + '\n', function(err) {
          if (err) {
            return console.log(err);
          }
     })
     fs.appendFile('log.txt', (answers.motivation) + '\n', function(err) {
          if (err) {
            return console.log(err);
          }
     })
     fs.appendFile('log.txt', (answers.build) + '\n', function(err) {
          if (err) {
            return console.log(err);
          }
     })
     fs.appendFile('log.txt', (answers.problem) + '\n', function(err) {
          if (err) {
            return console.log(err);
          }
     })
     fs.appendFile('log.txt', (answers.learn) + '\n', function(err) {
          if (err) {
            return console.log(err);
          }
     })
     fs.appendFile('log.txt', (answers.standOut) + '\n', function(err) {
          if (err) {
            return console.log(err);
          }
     })
     fs.appendFile('log.txt', (answers.features) + '\n', function(err) {
          if (err) {
            return console.log(err);
          }
     })
     fs.appendFile('log.txt', (answers.git) + '\n', function(err) {
          if (err) {
            return console.log(err);
          }
     })
     fs.appendFile('log.txt', (answers.license) + '\n', function(err) {
          if (err) {
            return console.log(err);
          }
          console.log("Success!");
     })
});

writeToFile('log.txt', (JSON.stringify(answers)), generateMarkdown());

