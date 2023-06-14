// TODO: Include packages needed for this application

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
    choices: ["None", "APACHE 2.0", "GNU v3.0", "MIT", "BSD 2", "BSD 3", "Boost", "Creative Commons Zero", "Eclipse", "GNU v2.0", "GNU v2.1", "Mozilla", "Unlicense"],
  },

  {
    type: "input",
    name: "contributions",
    message: "How will the end user be able to contribute?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
