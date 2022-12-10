// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const { writeFile } = require('fs').promises;
const generateMarkdown = markdown;

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is your project title?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'What was your motivation?'
    },
    {
      type: 'input',
      name: 'description2',
      message: 'Why did you build this project?'
    },
    {
      type: 'input',
      name: 'description3',
      message: 'What problem does it solve?'
    },
    {
      type: 'input',
      name: 'description4',
      message: 'What did you learn building it?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What steps are required to install your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use the project?'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who was involved?'
    },
    {
      type: 'input',
      name: 'thirdParty',
      message: 'Did you use any third-party assets?'
    },
    {
      type: 'input',
      name: 'tutorials',
      message: 'Did you follow any tutorials? Provide link here.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What License did you use?',
      choices: ['No License', 'MIT', 'Apache License 2.0', 'GNU General Public License v3.0']
    },
    {
      type: 'input',
      name: 'liveRepo',
      message: 'What is the url link to your project?'
    },
    {
        type: "input",
        name: "github",
        message: "Enter GitHub username:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email:",
      },
    {
      type: 'input',
      name: 'imageName1',
      message: 'Provide screenshot of project and image name you want displayed first.'
    },
    {
      type: 'input',
      name: 'screenshotName1',
      message: 'Give description of first project screenshot'
    },
    {
      type: 'input',
      name: 'imageName2',
      message: 'Provide screenshot of project and image name you want displayed second.'
    },
    {
      type: 'input',
      name: 'screenshotName2',
      message: 'Give description of second project screenshot'
    }
  ])
};

const init = () => {
  questions()
    .then((answers) => writeFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote README file!'))
    .catch(err => console.log(err));
};

// Function call to initialize app
init();
