// create a function that returns a license badge depending on the license 
function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}


// function to generate markdown README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description 
${data.description}
## Deployed Application URL
${data.link}
## Screenshot 
![alt-text](${data.screenshot})
## Table of Contents 
* [Features](#features)
* [Languages & Dependecies](#languageanddependencies)
* [Contributors](#contributors)
* [Testing] (#testing)
* [Questions] (#questions)

## Features 
${data.features}
## How to use This application:
${data.usage}
## Language & Dependencies
${data.require}
## Contributors
${data.contributors}
## Testing 
${data.test}
## Questions 

If you have any questions or issues contact me  at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generateMarkdown;