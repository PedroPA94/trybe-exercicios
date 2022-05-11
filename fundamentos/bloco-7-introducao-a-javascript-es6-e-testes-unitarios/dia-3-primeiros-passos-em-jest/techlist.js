function techList(tech, name) {
  if (tech.length === 0) { return 'Vazio!'; } 
  const results = [];
  tech = tech.sort();
  for (let word of tech) {
    results.push({ tech: word, name });
  }
  return results;
}

module.exports = techList;
