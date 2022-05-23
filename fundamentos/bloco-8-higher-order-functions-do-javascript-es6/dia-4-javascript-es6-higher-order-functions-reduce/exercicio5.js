const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arr) {
  return arr.reduce((numberOfAs, currentWord) => numberOfAs + currentWord.toLowerCase().split('a').length - 1, 0)
}

console.log(containsA(names))
