const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//questions

const commonQuestions = [
    {
        type: 'input',
        message: 'Name',
        name: 'name',
        validate: function(input) {
            return input !== '';
          }
    },
    {
        type:'input',
        message: 'Employee ID',
        name: 'id',
        validate: function(input) {
            return input !== '';
          }
    },
    {
        type: 'input',
        message: 'Email adress',
        name: 'email',
        validate: function(input) {
            return input !== '';
          }
    }
];

const menuQuestions = [
    {
        type: 'list',
        message: 'Choose an option',
        choices: ['Add an engineer','Add an intern','Finish building team'],
        name: 'menu',
    }
];

const managerQuestions = [
    {
        type: 'input',
        message: 'Phone number',
        name: 'phone',
        validate: function(input) {
            return input !== '';
          }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'Github username',
        name: 'github',
    }
];

const internQuestions = [
    {
        type: 'input',
        message: 'School',
        name: 'school',
    }
];

//welcome message
const welcomeMessage = `
Welcome to team builder website. 
Please follow the simple prompts to  generate a website listing all your team members`;


const team = [];

async function init() {
    console.log(welcomeMessage);

    const commonQuestionsAnswers = await inquirer
        .prompt(
            commonQuestions
        );
    
        // .then((responses) =>
        // {
        //     const manager = new Manager(responses.name,responses.id,responses.email);
        //     return manager;
        // }
        // ).catch((err) =>
        // {console.log('err')});

    const managerQuestionsAnswers = await inquirer
        .prompt(
            managerQuestions
        );
        // .then((responses) =>
        // {
        //     return manager.officeNumber = responses.officeNumber

        // });

    const manager = new Manager(
        commonQuestionsAnswers.name,
        commonQuestionsAnswers.id,
        commonQuestionsAnswers.email,
        managerQuestionsAnswers.phone
    );

    team.push(manager);

    let menuAnswers;

    do {
        menuAnswers = await inquirer
        .prompt(
            menuQuestions
        );

        switch (menuAnswers.menu) {
            case "Add an engineer":
                const commonQuestionsAnswersEngineer = await inquirer
                .prompt(
                    commonQuestions
                );
                const engineerAnswers = await inquirer
                .prompt(
                    engineerQuestions
                );

                const engineer = new Engineer(
                    commonQuestionsAnswersEngineer.name,
                    commonQuestionsAnswersEngineer.id,
                    commonQuestionsAnswersEngineer.email,
                    engineerAnswers.github
                );
                team.push(engineer);
                break;
            
            case "Add an intern":
                const commonQuestionsAnswersIntern = await inquirer
                .prompt(
                    commonQuestions
                );
                const internAnswers = await inquirer
                .prompt(
                    internQuestions
                );

                const intern = new Intern(
                    commonQuestionsAnswersIntern.name,
                    commonQuestionsAnswersIntern.id,
                    commonQuestionsAnswersIntern.email,
                    internAnswers.school
                );
                team.push(intern);
                break;
            case "Finish building team":
                console.log(`
                Finished building team.
                Your website has been generated`);
        }
    } while(menuAnswers.menu!=="Finish building team");

console.log(team);

};

init();

module.exports = team;
