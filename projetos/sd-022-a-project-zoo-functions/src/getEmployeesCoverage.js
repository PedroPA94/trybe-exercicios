const data = require('../data/zoo_data');

function getSpecies(responsibleFor) {
  const species = responsibleFor.map((speciesId) => {
    const { name } = data.species.find(({ id }) => id === speciesId);
    return name;
  });
  return species;
}

function getLocations(responsibleFor) {
  const locations = responsibleFor.map((speciesId) => {
    const { location } = data.species.find(({ id }) => id === speciesId);
    return location;
  });
    // Acredito que ficaria mais bacana removendo as 'locations' duplicadas, o que poderia ser feito assim:
    // .reduce((acc, cur) => {
    //   if (!acc.includes(cur)) {
    //     acc.push(cur);
    //   }
    //   return acc;
    // }, []);
  return locations;
}

function getEmployeesList() {
  const employees = data.employees.reduce((acc, { id, firstName, lastName, responsibleFor }) => {
    const currentEmployee = {
      id,
      fullName: `${firstName} ${lastName}`,
      species: getSpecies(responsibleFor),
      locations: getLocations(responsibleFor),
    };
    acc.push(currentEmployee);
    return acc;
  }, []);
  return employees;
}

function getEmployeesCoverage(obj) {
  const employees = getEmployeesList();
  const names = employees.map(({ fullName }) => fullName);
  const ids = employees.map((employee) => employee.id);
  if (obj === undefined) {
    return employees;
  }
  const { name, id } = obj;
  if (ids.includes(id)) {
    return employees.find((employee) => employee.id === id);
  }
  if (names.some((employeeName) => employeeName.includes(name))) {
    return employees.find(({ fullName }) => fullName.includes(name));
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
