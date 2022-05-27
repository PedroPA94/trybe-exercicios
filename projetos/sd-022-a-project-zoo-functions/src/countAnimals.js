const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animals = data.species.reduce((acc, entry) => {
      acc[entry.name] = entry.residents.length;
      return acc;
    }, {});
    return animals;
  }
  if (Object.keys(animal).includes('specie')) {
    const speciesResidents = data.species.find((entry) => entry.name === animal.specie).residents;
    let numberOfResidents = speciesResidents.length;
    if (Object.keys(animal).includes('sex')) {
      const speciesAndSex = speciesResidents.filter((resident) => resident.sex === animal.sex);
      numberOfResidents = speciesAndSex.length;
    }
    return numberOfResidents;
  }
  throw new Error(`Erro! Parâmetro inválido.
  Chame a função sem parâmetro ou com um objeto com propriedades "specie" e "sex"(opcional)`);
}

module.exports = countAnimals;
