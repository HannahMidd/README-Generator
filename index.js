// Required Packages:
// fs = For nodes file system // path = nodes path related functionality // inquirer allows us to use command lines //
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "github name",
    message: "What is your Github username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },

  {
    type: "input",
    name: "title",
    message: "What is the name of this project?",
  },

  {
    type: "input",
    name: "description",
    message: "What is the desciption of your project?",
  },

  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions. If none, write N/A.",
  },

  {
    type: "input",
    name: "usage",
    message: "Explain how to use your application to the end user",
  },
  {
    type: "input",
    name: "test",
    message: "Provide test instructions. If none, write N/A. ",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does this project have?",
    choices: [
      "None",
      "APACHE_2.0",
      "GPLv3",
      "MIT",
      "BSD_2",
      "BSD_3",
      "Boost_1.0",
      "EPL_1.0",
      "GPL_v2",
      "AGPL_v3",
      "MPL_2.0",
      "Unlicense",
    ],
  },

  {
    type: "input",
    name: "contributions",
    message: "How will the end user be able to contribute?",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  // The fs.writeFileSync() function blocks the code from completing UNTIL the answer is submitted.
  // path.join will join the code already gathered with the code being answered.
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
  // inquirer.prompt(questions) will take questions and make into argument to ask the user
  // then((inquirerResponses) => { will grab responses as "Inquirer Responses"
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    // Calls our previous "Write to file" function and calls answers to be put into the ReadMe
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// Calling the function
init();
