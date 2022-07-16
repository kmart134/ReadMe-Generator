//Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Badge
  ${answers.badge === "Apache" ? "Apache" + "" + '<br>' + "" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : answers.badge === "MIT" ? "MIT" + "" + '<br>' + "" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : answers.badge === "IBM" ? "IBM" + "" + '<br>' + "" + "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "Perl" + "" + '<br>' + "" + "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}
  ## Description 
  ${answers.description}
  ### Installation
  ${answers.installation}
  ### Usage
  ${answers.usage}
  ### Contributing Guidelines
  ${answers.contributing}
  ### Test Instructions
  ${answers.test}
  ## License
  The following application is covered under the ${answers.badge} license.
  ## Questions
  If you have any questions please email me at ${answers.email} or visit ${answers.GitHub}.
  `
}



module.exports = generateMarkdown;
