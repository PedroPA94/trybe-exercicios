const formatedBookNames = require('./exercise1');
const nameAndAge = require('./exercise2');
const fantasyOrScienceFiction = require('./exercise3');
const oldBooksOrdered = require('./exercise4');
const fantasyOrScienceFictionAuthors = require('./exercise5');
const oldBooks = require('./exercise6');
const authorWith3DotsOnName = require('./exercise7');

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

console.log(`Ex. 1: \n ${JSON.stringify(formatedBookNames(books), null, 2)} \n`);
console.log(`Ex. 2: \n ${JSON.stringify(nameAndAge(books), null, 2)} \n`);
console.log(`Ex. 3: \n ${JSON.stringify(fantasyOrScienceFiction(books), null, 2)} \n`);
console.log(`Ex. 4: \n ${JSON.stringify(oldBooksOrdered(books), null, 2)} \n`);
console.log(`Ex. 5: \n ${JSON.stringify(fantasyOrScienceFictionAuthors(books), null, 2)} \n`);
console.log(`Ex. 6: \n ${JSON.stringify(oldBooks(books), null, 2)} \n`);
console.log(`Ex. 7: ${authorWith3DotsOnName(books)}`);