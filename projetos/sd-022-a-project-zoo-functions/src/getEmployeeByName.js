const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.find((employee) => Object.values(employee).includes(employeeName)) || {};
}

module.exports = getEmployeeByName;
