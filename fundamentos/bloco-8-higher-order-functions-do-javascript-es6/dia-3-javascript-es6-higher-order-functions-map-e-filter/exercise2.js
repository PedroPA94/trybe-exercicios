function nameAndAge(arr) {
  return arr.map(element => {
      let age = element.releaseYear - element.author.birthYear;
      return { age, author: element.author.name, }})
    .sort((a, b) => a.age - b.age);
}

module.exports = nameAndAge;
