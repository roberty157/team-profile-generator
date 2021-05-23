const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
/*
<div class="card" style="width: 18rem;">
    <div class="card-body bg-primary text-light">
        <h5 class="card-title">Jared</h5>
        <p class="card-text">Manager</p>
    </div>
    <div class="p-3 bg-light">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 1</li>
            <li class="list-group-item">email: jared@fakemail.com</li>
            <li class="list-group-item">Office number: 1</li>
        </ul>
    </div>
</div>
*/
//array of objects
function writeToFile(fileName, employeeList){
    let employeeCards = ''
    for(let i =0;i<employeeList.length;i++){
        if(employeeList[i].getRole() ==='Manager'){
            employeeCards += ManagerHTML(employeeList[i]);
        }
        else if(employeeList[i].getRole() === 'Engineer'){
            employeeCards += EngineerHTML(employeeList[i]);
        }else if(employeeList[i].getRole() === 'Intern'){
            employeeCards += InternHTML(employeeList[i]);
        }
    }
    const HTML = `<!DOCTYPE html>
            <html>
                <head>
                    <title>template for js-rendered html</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
                </head>
                <body>

                    <nav class="navbar navbar-light bg-light d-flex justify-content-center">
                        <span class="navbar-brand mb-0 h1 ">My Team</span>
                    </nav>
                    <div class="card" style="width: 18rem;">
                        ${employeeCards}
                    </div>
                </body>
            </html>`
    console.log(employeeList);

    fs.writeFile(`./${fileName}`, HTML, err =>{
        if (err) {
            console.error(err);
            return
        }
    })
}

function EngineerHTML(obj){
    const html = `
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary text-light">
            <h5 class="card-title">${obj.getName()}</h5>
            <p class="card-text">${obj.getRole()}</p>
        </div>
        <div class="p-3 bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${obj.getId()}</li>
                <li class="list-group-item">email: ${obj.getEmail()}</li>
                <li class="list-group-item">Github: <a href="https://www.github.com/${obj.getGithub()}">${obj.getGithub()}</a> </li>
            </ul>
        </div>
    </div>
    `
    return html;
}
function InternHTML(obj){
    const html = `
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary text-light">
            <h5 class="card-title">${obj.getName()}</h5>
            <p class="card-text">${obj.getRole()}</p>
        </div>
        <div class="p-3 bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${obj.getId()}</li>
                <li class="list-group-item">email: ${obj.getEmail()}</li>
                <li class="list-group-item">School: ${obj.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
    return html;
}
function ManagerHTML(obj){
    const html = `
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary text-light">
            <h5 class="card-title">${obj.getName()}</h5>
            <p class="card-text">${obj.getRole()}</p>
        </div>
        <div class="p-3 bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${obj.getId()}</li>
                <li class="list-group-item">email: ${obj.getEmail()}</li>
                <li class="list-group-item">Office Number: ${obj.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
    return html;
}

function EngineerPrompt(employeeList){
    inquirer
    .prompt([
        {
            type:'input',
            message:"Enter engineer's name:",
            name:'name'
        },
        {
            type:'input',
            message:"Enter engineer's employee ID",
            name:'id'
        },
        {
            type:'input',
            message:"Enter engineer's email address",
            name:'email'
        },
        {
            type:'input',
            message:"Enter engineers's Github",
            name:'github'
        },
        {
            type:'list',
            message:"What would you like to add next?",
            choices: ['intern','engineer','finished'],
            name: "nextOption",
        },
    ])
    .then((response)=>{
        const engineerObj = new Engineer(response.name, response.id, response.email, response.github);
        employeeList.push(engineerObj);
        if(response.nextOption==='intern'){
            InternPrompt(employeeList);
        }else if(response.nextOption==='engineer'){
            EngineerPrompt(employeeList);
        }else{
            writeToFile('readme.html',employeeList);
        }
        
    })
}

function InternPrompt(employeeList){
    inquirer
    .prompt([
        {
            type:'input',
            message:"Enter intern's name:",
            name:'name'
        },
        {
            type:'input',
            message:"Enter intern's employee ID",
            name:'id'
        },
        {
            type:'input',
            message:"Enter intern's email address",
            name:'email'
        },
        {
            type:'input',
            message:"Enter intern's school",
            name:'school'
        },
        {
            type:'list',
            message:"What would you like to add next?",
            choices: ['intern','engineer','finished'],
            name: "nextOption",
        },
    ])
    .then((response)=>{
        const internObj = new Intern(response.name, response.id, response.email, response.school);
        employeeList.push(internObj);
        if(response.nextOption==='intern'){
            InternPrompt(employeeList);
        }else if(response.nextOption==='engineer'){
            EngineerPrompt(employeeList);
        }else{
            writeToFile('readme.html',employeeList);
        }
        
    })
}    

function init(){
    inquirer
    .prompt([
        {
            type:'input',
            message:"Enter team manager's name:",
            name:'name'
        },
        {
            type:'input',
            message:"Enter team manager's employee ID",
            name:'id'
        },
        {
            type:'input',
            message:"Enter team manager's email address",
            name:'email'
        },
        {
            type:'input',
            message:"Enter team manager's office number",
            name:'officeNumber'
        },
        {
            type:'list',
            message:"What would you like to add next?",
            choices: ['intern','engineer','finished'],
            name: "nextOption",
        },
        
    ])
    .then((response)=>{
        let employeeList =[];
        const managerObj = new Manager(response.name,response.id, response.email, response.officeNumber);
        employeeList.push(managerObj);
        if(response.nextOption==='intern'){
            InternPrompt(employeeList);
        }else if(response.nextOption ==='engineer'){
            EngineerPrompt(employeeList);
        }else{
            writeToFile('readme.html',employeeList);
        }
        
    })
}
init();

