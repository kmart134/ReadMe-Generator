
//create const

const inquirer= require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require ('./utils/generateMarkdown');

//Array questions for user input:
const questions =
     ([
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
            message:"If your project has features, please list them here",
            name:"Features"},
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
        ]);




 //function to initialize app

function init() {
  
    inquirer.prompt(questions).then((answers) => {
    const filename = "READMe";
   
    //use fs to write the file and path 
    fs.writeFile(filename, generateMarkdown(answers), (err) =>
    err ? console.log(err) : console.log('Success!'));
    });
    }
    // fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) =>
    // err ? console.log(err) : console.log('Success!'));
    // });
    // }

init();
    
//     console.log("This is the readme generator");
//     try{
//         // const answers = await userPrompt();
//         const md = generateMarkdown(answers);
//         await writeFileAsync("README.md", md);
//         console.log("your README has been generated!");
//     } catch (err){
//         console.log(err);
//     }
// }



