const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./utils/generateLogo.js");

// Prompt user for logo info
const questions = [
    {
      type: "list",
      name: "logoShape",
      message: `Please choose logo shape`,
      choices: [
        "triangle", 
        "circle", 
        "square"
      ]
    },
    {
      type: "input",
      name: "logoColor",
      message: `Please enter a color for your logo background.`,
    },
    {
      type: "input",
      name: "logoName",
      message: "Please enter 1-3 letters for your logo",
    },
    {
      type: "input",
      name: "textColor",
      message: `Please enter a color for your logo text.`,
    },
    
    
];

// create a function to generate logo.svg
function writeToFile(fileName, data) {
  var content = generateLogo(data);
  fs.writeFile(fileName, content, function(error) {
      if (error) {
        return console.log(err);
      }
        console.log("Logo generated successfully");
  });
}

// TODO: create function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    var fileName = 'logo.svg';
    writeToFile(fileName, data);
  });
}

//TODO: function to generate the logo
   
init();
  
  