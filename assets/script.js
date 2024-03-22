// GIVEN an employee payroll tracker
// WHEN I click the "Add employee" button
// THEN I am presented with a series of prompts asking for first name, last name, and salary
// WHEN I finish adding an employee
// THEN I am prompted to continue or cancel
// WHEN I choose to continue
// THEN I am prompted to add a new employee
// WHEN I choose to cancel
// THEN my employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employees = [];
  let addEmployee = true;
  while (addEmployee) {
    const employee = {
      firstName: prompt('What is the employees first name'),
      lastName: prompt("What is the employee's last name"),
      salary: parseInt(prompt(`What is the salary`))
    };
    console.log('employee', employee);
    employees.push(employee);
    console.log('employees array', employees);
    addEmployee = confirm('would you like to add another employee');
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  console.log(employeesArray)
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  let numEmployees = employeesArray.length;
  // Collect all employee's salary data
  // Take the sum of that data
  // Divide by number of employees to return the average salary data
  // employeesArray = [];
  // let sum = 0;
  //   for (let i = 0; i < employeesArray.length; i++) {
  //     sum += employeesArray[i];
  //   }
  //   return sum / employeesArray.length;

  for (const employee of employeesArray) {
    totalSalary = totalSalary + employee.salary;
    console.log("employee", employee.salary)
  }

  const averageSalary = totalSalary / numEmployees;
  console.log(`The average employee salary between our ${numEmployees} employees is ${averageSalary}`);

  // totalSalary += employeesArray[i];
  // for (let i = 0; i < numEmployees; i++) {
  //   totalSalary += numEmployees[i];
  // }
  // return totalSalary;


}



// Select a random employee
const getRandomEmployee = function (employeesArray) {
  let randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]

  // TODO: Select and display a random employee
  console.log(`Congrats to ${randomEmployee.firstName} ${randomEmployee.lastName} our random winner`);
  console.log("randomEmployee", randomEmployee)
}



/* Need to create an collectEmployees function that will allow adding multiple employees on the page. 
The user can enter first name, last name and the salary
Then have the option to stop. A while loop needs to be used here
The salary needs to be added as a number or it should default to $0. Use the isNAN function /*

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
