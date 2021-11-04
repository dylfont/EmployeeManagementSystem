const mysql = require('mysql2');
const inquirer = require("inquirer");
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'rootroot',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

function main(){
    inquirer.prompt([
        {
          type:"list",
          message:"what do you want to do?", 
          name:"choice",
          choices:["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
        }
    ]).then(function(data){
console.log(data)
    })
};

 function viewAllDepartments(){
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
      });
 }
main()