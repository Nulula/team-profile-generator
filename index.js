const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
import inquirer from 'inquirer';

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//questions

const commonQuestions = [
    {
        type: 'input';
        message: 'name';
        name: 'name';
    },
    {
        type:'input';
        message: 'Employee ID';
        name: 'id';
    },
    {
        type: 'input';
        message: 'Email adress';
        name: 'email';
    }
];

const menuQuestions = [
    {
        type: 'list';
        message: 'Choose an option';
        choices: ['Add an engineer','Add an intern','Finish building team'];
        name: 'menu';
    }
];

const managerQuestions = [
    {
        type: 'input';
        message: 'Phone number';
        name: 'phone';
    }
];

const engineerQuestions = [
    {
        type: 'input';
        message: 'Github username';
        name: 'github';
    }
];

const internQuestions = [
    {
        type: 'input';
        message: 'School';
        name: 'school';
    }
];

//welcome message
const welcomeMessage  `
Welcome to team builder website. 
Please follow the simple prompts to  generate a website listing all your team members`;


inquirer
    .prompt([
        {
            type:
        }
    ])