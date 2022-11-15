// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
const renderLicenseBadge = license => {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  else {
    return ''
  }
  
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
const renderLicenseSection = license => {
  if (license === 'No License') {
    return ''
  }
  else {
    return `
    ## License
    - ${license}, Please refer to the LICENSE in the repo.`
  }
}

// TODO: Create a function to generate markdown for README
const writeToFile = ({ projectTitle, description, description2, description3, description4, installation, usage, credits, thirdParty, tutorials, license, liveRepo, screenshotName1, screenshotName2, screenshotName3, imageName1, imageName2, imageName3, github, email }) =>
  `# ${projectTitle}
  ${renderLicenseBadge(license)}

## Description

- ${description}
- ${description2}
- ${description3}
- ${description4}

* [${projectTitle}](https://${liveRepo}/ "Named link title")

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
- ${installation}

## Usage
- ${usage}
* [${projectTitle}](${liveRepo}/ "Named link title")

## Credits
- ${credits}
- ${thirdParty}
- ${tutorials}


${renderLicenseSection(license)}

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
