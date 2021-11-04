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

function main() {
    inquirer.prompt([
        {
            type: "list",
            message: "what do you want to do?",
            name: "choice",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "quit"]
        }
    ]).then(function (data) {
        console.log(data)
        if (data.choice === "view all departments") {
            viewAllDepartments()
        } else if (data.choice === "view all roles") {
            viewAllRoles()
        } else if (data.choice === "view all employees") {
            viewAllEmployees()
        } else if (data.choice === "add a department") {
            addADepartment()
        } else if (data.choice === "add a role") {
            addARole()
        } else if (data.choice === "add an employee") {
            addAnEmployee()
        } else if (data.choice === "update an employee role") {
            updateAnEmployeeRole()
        } else if (data.choice === "quit") {
            quit()
        }
    })
};

function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        main()
    });
}
function viewAllRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
        main()
    });
}
function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
        main()
    });
}
function addADepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is the name of the department?",
            name: "name",
        }
    ]).then(function (data) {
        console.log(data)
        db.query('INSERT INTO department SET ?', data, function (err, results) {
            console.table(results);
            main()
        });
    })
}
function addARole() {
inquirer.prompt([
    {
        type: "input",
        message: "what is the title of the role?",
        name: "title",

    },
    {
        type: "input",
        message: "what is the salary of the role?", 
        name: "salary",

    },
    {
        type: "input",
        message: "what is the department of the role?",
        name: "department_id",
    }
]).then(function (data) {
    console.log(data)
    db.query('INSERT INTO role SET ?', data, function (err, results) {
        console.table(results);
        main()
    });
})
}
function addAnEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is the first name of the employee?",
            name: "first_name",
    
        },
        {
            type: "input",
            message: "what is the last name of the employee?", 
            name: "last_name",
    
        },
        {
            type: "input",
            message: "what is the role of the employee?",
            name: "role_id",
        },
        {
            type: "input",
            message: "what is the id of the manager of the employee?",
            name: "manager_id",
        }
    ]).then(function (data) {
        console.log(data)
        db.query('INSERT INTO employee SET ?', data, function (err, results) {
            console.table(results);
            main()
        });
    })
    }
    function quit(){
        process.exit()
    }
main()