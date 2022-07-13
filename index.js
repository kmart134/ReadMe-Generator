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
            message:"What is the description of your project?",
            name:"Description"}
            //continue to fill README
        ]);
}

function generateReadMe (answers){
    return `#${answers.title}
    ## Description 
    ${answers.description}
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
