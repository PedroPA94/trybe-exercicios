const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageFilter = (minAge, maxAge = Infinity) => {
    const filter = entrants.filter((person) => person.age >= minAge && person.age < maxAge);
    return filter;
  };
  const visitorsByAgeGroup = {
    child: ageFilter(0, 18).length,
    adult: ageFilter(18, 50).length,
    senior: ageFilter(50).length,
  };
  return visitorsByAgeGroup;
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === 0 || Object.keys(entrants).length === 0) { return 0; }
  const ageGroups = ['child', 'adult', 'senior'];
  const visitors = countEntrants(entrants);
  const zooPrices = data.prices;
  const totalPrice = ageGroups.reduce((acc, group) => acc + visitors[group] * zooPrices[group], 0);
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
