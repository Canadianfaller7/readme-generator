// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const writeToFile = ({ projectTitle, description, description2, description3, description4, installation, usage, credits, license, liveRepo, screenshotName1, screenshotName2, screenshotName3, imageName1, imageName2, imageName3, github, email }) =>
  `# ${projectTitle}

## Description

- ${description}
- ${description2}
- ${description3}
- ${description4}

* [${projectTitle}](${liveRepo}/ "Named link title")

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## Usage
- ${usage}
* [${projectTitle}](${liveRepo}/ "Named link title")

## Credits
- ${credits}
- ${credits}
- ${credits}


## License
${license}
Please refer to the LICENSE in the repo.

## Screenshots

- ${screenshotName1}
![Alt text](./assets/images/${imageName1}.png?raw=true "Optional Title")

- ${screenshotName2}
![Alt text](./assets/images/${imageName2}.png?raw=true "Optional Title")

- ${screenshotName3}
![Alt text](./assets/images/${imageName3}.png?raw=true "Optional Title")

## Questions

- Github Profile: github.com/${github}
- Please feel free to email me at: ${email} with any additional questions. 

`;


module.exports = writeToFile;
