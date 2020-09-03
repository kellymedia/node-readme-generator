const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generate = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?"
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
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
