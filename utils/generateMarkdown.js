function generateMarkdown(data) {
  const gitHubImg = `https://github.com/${data.username}.png?size=100`;
  return `
# ${data.title}

${data.badges}

## Description

${data.description}

## Table of Contents

-[Description](#Description)
-[Installation](#Installation)
-[Usage](#Usage)
-[License](#License)
-[Contributors](#Contributors)
-[Test](#Test)
-[Repository Link](#Repository)
-[GitHub Info](#GitHub)

## Installation

        ${data.installation}

## Usage

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

![Profile Image](${gitHubImg})
-[Email me](mailto:michael@kelly.media)

`;
}

module.exports = generateMarkdown;
