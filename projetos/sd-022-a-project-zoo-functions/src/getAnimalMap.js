const data = require('../data/zoo_data');

function getAnimalsByLocation() {
  // Retorna um objeto onde as chaves são as locations e os valores são os animais que ocorrem nelas
  // P. e.x: { NE: ['lions', 'giraffes'], NW: ... }
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const animalsByLocation = locations.reduce((acc, cur) => {
    const animals = data.species.filter(({ location }) => location === cur) // Para cada animal que está na location da iteração atual do reduce...
      .map(({ name }) => name); // ... pega o seu nome e repete para o próximo animal
    acc[cur] = animals;
    return acc;
  }, {});
  return animalsByLocation;
}

function getAnimalNames(sorted, sex) {
  // Retorna um objeto onde as chaves são os animais e os valores são arrays com os nomes
  // P. ex.: { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'], giraffes: ... }
  const animalNames = data.species.reduce((acc, { name, residents }) => {
    const names = residents.reduce((acc2, { name: animalName, sex: animalSex }) => { // Gera array com os nomes do animal da iteração atual do reduce anterior
      if (sex && animalSex !== sex) {
        return acc2;
      }
      acc2.push(animalName);
      return acc2;
    }, []);
    acc[name] = sorted ? names.sort() : names;
    return acc;
  }, {});
  return animalNames;
}

function setNames(animalsByLocation, animalNames) {
  // Retorna um objeto onde as chaves são as locations e os valores arrays de objetos, cada obj contendo um animal e os nomes dos residentes
  // P. ex: { NE: [{ lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] }, { giraffes: [...] }], NW: [...], ... }
  const namesByLocation = Object.entries(animalsByLocation).reduce((acc, [key, value]) => {
    const names = value.reduce((acc2, animal) => { // Gera array de objetos, cada um igual a { animal: [residentes] } de acordo com a iteração do reduce anterior
      const aux = {};
      aux[animal] = animalNames[animal];
      acc2.push(aux);
      return acc2;
    }, []);
    acc[key] = names; // Na location (key) atual, o valor será o array de objetos 'names'
    return acc;
  }, {});
  return namesByLocation;
}

function getAnimalMap(options) {
  let animalsByLocation = getAnimalsByLocation();
  if (options) {
    const { includeNames, sorted, sex } = options;
    if (includeNames) {
      const animalNames = getAnimalNames(sorted, sex);
      animalsByLocation = setNames(animalsByLocation, animalNames);
    }
  }
  return animalsByLocation;
}

module.exports = getAnimalMap;
