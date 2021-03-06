

const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

console.log("Welcome to my README generator. Answer the next series of questions to generate a README.");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
     return inquirer.prompt([
          {
          type: 'input',
          name: 'title',
          message: '1. What is the title of your project?'
          },
          {
          type: 'input',
          name: 'description',
          message: '2. Provide a brief description of your project.'
          },
          {
          type: 'input',
          name: 'motivation', 
          message: '3. What was the motivation for creating this project?'
          },
          {
          type: 'input',
          name: 'problem',
          message: '4. What problem does it solve?'
          },
          {
          type: 'input',
          name: 'learn',
          message: '5. What did you learn from this project?'
          },
          {
          type: 'input',
          name: 'standOut',
          message: '6. What makes your project stand out?'
          },
          {
          type: 'input',
          name: 'features',
          message: '7. What features does your project have?'
          },
          {
          type: 'checkbox',
          message: '8. What technologies does your project incorporate? (Choose from list and hit enter to advance)',
          name: 'technology',
          choices: [
               'HTML',
               'CSS',
               'Bootstrap',
               'JavaScript',
               'jQuery',
               'moment.js',
               'API Calls',
               'AJAX',
               'node.js',
               'mySQL'
          ]},
          {
          type: 'input',
          name: 'installation',
          message: '9. Are there any required steps to insall the project?'
          },
          {
          type: 'input',
          name: 'use',
          message: '10. How do you use the project?'
          },
          {
          type: 'input',
          name: 'git',
          message: '11. What is your GitHub username?'
          },
          {type: 'input',
          name: 'email',
          message: '12. Provide your email address for questions or comments.'
          },
          {
          type: 'list',
          message: "13. Which license would you prefer to use? (Hit enter to select)",
          name: 'license',
          choices:[
          'MIT',
          'ISC',
          'Unlicense', 
          'W3C'           
          ],    
          } 
     ])
};

function generateREADME(answers) {
 return `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Good README Generator</title>
</head>
<body>
<div id = "top">

<h2>${answers.title}</h2> <a href="#license"><img src= "https://img.shields.io/badge/License-${answers.license}-blue.svg"></a><br>

<hr color= "slateblue" noshade>

<h2>Table of Contents:</h2>
<a href="#description" class="contents">1. Description of Project</><br>
<a href="#technology" class="contents">2. Technologies Used</a><br>
<a href="#installation" class="contents">3. Installation Directions</a><br>
<a href="#use" class="contents">4. How to Use the Project</a><br>
<a href="#contributors" class="contents">5. Contributing</a><br> 
<a href="#questions" class="contents">6. Questions or Comments</a><br>
<a href="#license" class="contents">7. License</a><br>
<a href="#screenshot" class="contents">8. Screenshots of Project</><br>
<br>

<hr color= "slateblue" noshade>

<h3 id='description'>Description of Project</h3>
<p>${answers.description} ${answers.motivation} ${answers.problem} ${answers.learn} ${answers.standOut} ${answers.features}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='techology'>Technologies Used</h3>
<p>This project incoporates the following tecnologies:<br>
${answers.technology}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='installation'>Installation</h3>
<p>${answers.installation}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='use'>How to Use the Project</h3>
<p>${answers.use}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='contributors'>Contributing to the Project</h3>
<p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='questions'>For Questions or Comments</h3>
<p>Please contact me at github.com/${answers.git } or ${answers.email } for questions or comments.</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='license'>License</h3>
<p>This project incorporates the following license: <a href="https://www.npmjs.com/package/inquirer${answers.license}">${answers.license}</a></p>
<a href="#top" id="start">(Back to Top of Page)</a><br>

<hr color= "slateblue" noshade>

<h3 id='screenshot'>Screenshots</h3>
    
</body>
</html> `;
}


async function init() {
    try {
         const answers = await promptUser();

         const readMe = generateREADME(answers);

         await writeFileAsync('README.md', readMe);
         console.log('Successfully written to README.md');
         
    } catch (err) {
         console.log(err);
    }
}


init(); 


