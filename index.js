const inquirer = require('inquirer');


function writeToFile(){
    console.log(response);
}

function init(){
    inquirer
    .prompt([
        {
            type:'input',
            message:"Enter team manager's name:",
            name:'managerName'
        }
    ])
    .then((response)=>{
        writeToFile('readme.html',response);
    })
}