// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Github username?",
    name: "username",
    // validate: (value) => {
    //   value ? true : "I need a value to continue.";
    // },
  },
  {
    type: "input",
    message: "Github Repo?",
    name: "repo",
    // validate: (value) => {
    //   value ? true : "I need a value to continue.";
    // },
  },
  {
    type: "input",
    message: "What is the project title?",
    name: "title",
    // validate: (value) => {
    //   value ? true : "I need a value to continue.";
    // },
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
    // validate: (value) => {
    //   value ? true : "I need a value to continue.";
    // },
  },
  {
    type: "input",
    message: "How do you install your app?",
    name: "installation",
    // validate: (value) => {
    //   value ? true : "I need a value to continue.";
    // },
  },
  {
    type: "input",
    message: "Instructions and Usage?",
    name: "instruction",
    // validate: (value) => {
    //   value ? true : "I need a value to continue.";
    // },
  },
  {
    type: "input",
    message: "How to contribute to your project?",
    name: "contributing",
    // validate: (value) => {
    //   value ? true : "I need a value to continue.";
    // },
  },

  {
    type: "input",
    message: "Any tests?",
    name: "testing",
    // validate: (value) => {
    //   value ? true : "I need a value to continue.";
    // },
  },
  {
    type: "checkbox",
    message: "What license do you use?",
    name: "license",
    choices: [
      "The MIT License",
      "The GPL License",
      "Apache License",
      "GNU License",
      "N/A",
    ],
    // validate: (value) => {
    //   value ? true : "I need a value to continue.";
    // },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    // validate: (value) => {
    //   value ? true : "I need a value to continue.";
    // },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // fs.writeFile(fileName, data, (err) => {
  //   err ? console.log(err) : console.log("Success!");
  // });
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
//writeToFile("readme.txt", JSON.stringify(questions, null, "\t"));
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log("Creating Prefessional README.md File...");
    writeToFile("./readme/READE.md", generateMarkdown({ ...response }));
  });
}

// Function call to initialize app
init();
