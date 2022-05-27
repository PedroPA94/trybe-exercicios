const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeId) {
  const species = data.employees.find(({ id }) => id === employeeId).responsibleFor[0];
  const animals = data.species.find(({ id }) => id === species).residents;
  const oldestAnimal = animals.reduce((acc, cur) => (cur.age > acc.age ? cur : acc));
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
