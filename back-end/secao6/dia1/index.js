const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const BooksController = require('./controllers/book.controller');

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/books', BooksController.getAll);
app.get('/books/:id', BooksController.getById);
app.post('/books', BooksController.createBook);
app.put('/books/:id', BooksController.updateBook);
app.delete('/books/:id', BooksController.remove);
