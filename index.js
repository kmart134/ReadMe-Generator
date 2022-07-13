// TODO: Include packages needed for this application
var inquirer= require('inquirer');
var fs = require('fs');
const util = require('util');
const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = 

function userPrompt(){
    return inquirer.prompt ([
            {type:"input", 
            message:"What is the title of you project?",
            name:"title"},
            {type:"input", 
            message:"Provide a short description explaining your project.",
            name:"Description"},
            {type:"input", 
            message:"What are the steps required to install your project?",
            name:"installation"},
            {type:"input", 
            message:"Provide instructions and examples for use.",
            name:"usage"},
            {type:"input", 
            message:"List you collaborators",
            name:"Credits"},
            {type:"input", 
            message:"License?",
            name:"License"},
            {type: "list",
            message: "Please select one of these licenses: ",
            name: "badge",
            choices: [
                    "Apache",
                    "IBM",
                    "MIT",
                    "Perl"
                ]
            },

            //continue to fill README
        ]);
}

function generateReadMe (answers){
    return `#${answers.title}
    ## Description 
    ${answers.description}
    #badge
    ${answers.badge === "Apache" ? "Apache" + "" + '<br>' + "" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : answers.badge === "MIT" ? "MIT" + "" + '<br>' + "" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : answers.badge === "IBM" ? "IBM" + "" + '<br>' + "" + "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "Perl" + "" + '<br>' + "" + "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}
    `
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    console.log("this is the readme generator");
    try{
        const answers = await userPrompt();
        const md = generateReadMe(answers);
        await writeFileAsync("README.md", md);
        console.log("your README has been generated!");
    } catch (err){
        console.log(err);
    }
}

// Function call to initialize app
init();
