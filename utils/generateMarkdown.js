function generateMarkdown(data) {
  const gitHubImg = `https://github.com/${data.username}.png?size=75`;
  return `
# ${data.title}

${data.badge}

[![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)

## Description

${data.description}

## Demo

![Git](demo.gif)   
[Video Link]
()

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Test](#Test)
* [Repository Link](#Repository)
* [GitHub Info](#GitHub)

## Installation

Open your repository in an integrated terminal. Run this command:

        ${data.installation}

## Usage

The application will be invoked with the following command:

        ${data.usage}

## License 

${data.license}

## Contributors

${data.contributing}

## Test

${data.test}

## Repository Link

- [Project Repository](${data.repository})

## GitHub

[![Profile Image](${gitHubImg} "kellymedia profile image")](https://github.com/kellymedia)
<br>
-[Email me](mailto:michael@kelly.media)
<br>
![GitHub followers](https://img.shields.io/github/followers/kellymedia?label=follow&style=social)

`;
}

module.exports = generateMarkdown;
