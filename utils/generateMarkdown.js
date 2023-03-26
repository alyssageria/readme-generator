//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index.js');

// Returns license badge based on which license is passed
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license === "APACHE2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "Boost1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } else if (license === "BSD2") {
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    } else if (license === "BSD3") {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    } else if (license === "none") {
        return "";
    }
}

// Function that returns license link
function renderLicenseLink(license) {
    if (license === "MIT") {
        return "(https://opensource.org/licenses/MIT)"
    } else if (license === "APACHE2.0") {
        return "(https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "Boost1.0") {
        return "(https://www.boost.org/LICENSE_1_0.txt)"
    } else if (license === "BSD2") {
        return "(https://opensource.org/licenses/BSD-2-Clause)"
    } else if (license === "BSD3") {
        return "(https://opensource.org/licenses/BSD-3-Clause)"
    } else if (license === "none") {
        return "";
    }
}

// Function that returns license section in the README
function renderLicenseSection(license) {
    if (license !== "none") {
        return `## License
        This project is licensed under the ${license} license.`
    }
    return "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);
    const licenseSection = renderLicenseSection(data.license);
    return `
${licenseBadge}

# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)
${licenseLink}
## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

${licenseSection}

## Username
My github username is [${data.username}](https://github.com/${data.username}/).

## Email
You can contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
