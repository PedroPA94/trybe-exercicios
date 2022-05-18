function authorUnique(arr) {
  let uniqueBirthYears = true;
  arr.forEach((element, index) => {
    let year = element.author.birthYear;
    let auxArr = [...arr];
    auxArr.splice(index, 1); // cria array auxiliar que não contém o elemento do loop atual
    duplicateYear = auxArr.some((otherElement) => otherElement.author.birthYear === year);
    if (duplicateYear) { 
      uniqueBirthYears = false;
    }
  });
  return uniqueBirthYears;
}

module.exports = authorUnique;
