INSERT INTO department (name)
VALUES ("HR"), ("Programming");

INSERT INTO role (title, salary, department_id)
VALUES ("manager", 95000, 2), ("vice president", 125000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Albert", "Johnson", 1, null), ("Jennifer", "Stevens", 2, null);