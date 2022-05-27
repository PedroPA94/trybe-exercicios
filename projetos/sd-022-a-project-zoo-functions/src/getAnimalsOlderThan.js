const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const currentSpecies = data.species.find((aSpecies) => aSpecies.name === animal);
  return currentSpecies.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
