// Function that returns a license badge based on which license is passed in
// Use this link as reference if needed in the future: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// Shows the correlating license badge, or returns an empty string if there is no license
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else
  return "";
}

// Function that returns the license link, or if there is no license, an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  } else
  return "";
}

// Function that returns the license section of README, or if there is no license, an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License

    This project is licensed under a ${license} license.`;
  } else 
  return "";
}

// Function to generate markdown for README
// Try to add removal of sections that have N/A
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#Contributions)

* [Tests](#test)

* [Questions](#questions)

## Installation

To install necessary dependencies / get started, run the following command:


${data.installation}


## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributions}

## Tests

To run tests, run the following command:


${data.test}


## Questions

Please dont hesitate to reach out via email, ${data.email} with any questions/comments.

Feel free to check out more at my Github ([${data.github_name}]) at 
(https://github.com/${data.github_name}/).

`;
}

module.exports = generateMarkdown;