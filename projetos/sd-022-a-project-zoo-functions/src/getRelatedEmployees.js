const data = require('../data/zoo_data');

function isManager(id) {
  const managers = data.employees.reduce((acc, employee) => {
    if (!acc.includes(...employee.managers)) {
      acc.push(...employee.managers);
    }
    return acc;
  }, []);
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const relatedEmp = data.employees.filter((employee) => employee.managers.includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
    return relatedEmp;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
