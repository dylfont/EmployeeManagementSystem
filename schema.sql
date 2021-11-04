DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL, 
    department_id INT,
FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
    manager_id INT,
FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
);

-- * `department`

--     * `id`: `INT PRIMARY KEY`

--     * `name`: `VARCHAR(30)` to hold department name

-- * `role`

--     * `id`: `INT PRIMARY KEY`

--     * `title`: `VARCHAR(30)` to hold role title

--     * `salary`: `DECIMAL` to hold role salary

--     * `department_id`: `INT` to hold reference to department role belongs to

-- * `employee`

--     * `id`: `INT PRIMARY KEY`

--     * `first_name`: `VARCHAR(30)` to hold employee first name

--     * `last_name`: `VARCHAR(30)` to hold employee last name

--     * `role_id`: `INT` to hold reference to employee role

--     * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)