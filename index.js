const inquirer = require("inquirer");
const fs = require("fs");
// const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions and prompts for the user to create a good README.md file
function userPrompts() {
    return inquirer.prompt( [
        {
            type: "input",
            name: "title",
            message: "What is the title of this project?"
        },
        {
            type: "input",
            name: "badge",
            message: "Please provide links for badges to display."
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of this project."
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions for this project."
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide instructions for how to use this project once it is installed."
        },
        {
            type: "list",
            name: "license",
            message: "Please select a license for this project.",
            choices: ["MIT", "APACHE 2.0", "Academic Free License, v3.0", "None"]
        },
        {
            type: "input",
            name: "contributing",
            message: "Are there any contributors you would like to add to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "How do you test this project?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub profile username?"
        },
        {
            type: "input",
            name: "repository",
            message: "What is the link for this project's repository?"
        },
    ]);
};

// Function to write the README.md file using Fs node module
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function(err) {
        if (err) {
            throw err;
        }
        console.log(fileName + " has been successfully generated!");
    });
};

// Send user responses to generateMarkdown.js so information can be inserted into README.md file
async function init() {
    try {
        const userResponses = await userPrompts();
        generateMarkdown(userResponses);
        writeToFile("README.md", generateMarkdown(userResponses));
        console.log("SUCCESSFUL TRY!");
    } catch(err) {
        console.log(err);
    }
};

init();


// Testing axios module

// inquirer
//     .prompt(questions)
//     .then(function(data){
//         const queryUrl = `https://api.github.com/users/${data.username}`;

//         axios.get(queryUrl).then(function(res) {
//             const gitHubData = {
//                 profileImage: res.data.avatar_url,
//                 name: res.data.name,
//                 profile: res.data.html_url,
//                 email: res.data.email                
//             };

//             fs.writeFile("README.md", generate(data, gitHubData), function(err) {
//                 if (err) {
//                     throw err;
//                 };

//                 console.log("A new README.md file was generated successfully!");
//             });   
//         });
// });


