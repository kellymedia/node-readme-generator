function generateMarkdown(data) {
  const gitHubImg = `https://github.com/${data.username}.png?size=75`;
  return `
# **${data.title}**

${data.badge}

\n[![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)

## Description

${data.description}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Test](#Test)
* [Repository Link](#Repository)
* [GitHub Info](#GitHub)

## Installation

        ${data.installation}

## Usage

        ${data.usage}

## License 

${data.license}

${data.badge}

## Contributors

${data.contributing}

## Test

${data.test}

## Repository Link

- [Project Repository](${data.repository})

## GitHub

![Profile Image](${gitHubImg})

/n-[Email me](mailto:michael@kelly.media)

`;
}

module.exports = generateMarkdown;
