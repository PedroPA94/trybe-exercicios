const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.filter((aSpecies) => aSpecies.id === id)).flat();
}

module.exports = getSpeciesByIds;
