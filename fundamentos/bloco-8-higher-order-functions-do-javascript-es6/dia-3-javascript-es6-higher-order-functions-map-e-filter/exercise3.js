function fantasyOrScienceFiction(arr) {
  return arr.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
}

module.exports = fantasyOrScienceFiction;
