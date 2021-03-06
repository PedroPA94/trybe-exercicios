const authorBornIn1947 = require('./exercise1');
const smallerName = require('./exercise2');
const getNamedBook = require('./exercise3');
const booksOrderedByReleaseYearDesc = require('./exercise4');
const everyoneWasBornOnSecXX = require('./exercise5');
const someBookWasReleaseOnThe80s = require('./exercise6');
const authorUnique = require('./exercise7');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

console.log(`Ex. 1 - Autor nascido em 1947: ${authorBornIn1947(books)} \n`);
console.log(`Ex. 2 - Livro de menor título: ${smallerName(books)} \n`);
console.log(`Ex. 3 - Livro com título de 26 caracteres: ${JSON.stringify(getNamedBook(books), null, 2)} \n`);
console.log(`Ex. 4 - Livros ordenados por ano de lançamento, decrescente: ${JSON.stringify(booksOrderedByReleaseYearDesc(books), null, 2)} \n`);
console.log(`Ex. 5 - Todos os autores nasceram no século XX? ${everyoneWasBornOnSecXX(books)} \n`);
console.log(`Ex. 6 - Algum livro foi lançado nos anos 80? ${someBookWasReleaseOnThe80s(books)} \n`);
console.log(`Ex. 7 - Todos os autores nasceram em anos diferentes? ${authorUnique(books)}`);
