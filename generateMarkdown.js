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
