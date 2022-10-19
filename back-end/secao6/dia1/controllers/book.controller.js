const BookServices = require('../services/book.service');

const getAll = async (req, res) => {
  const { author } = req.query;
  try {
    let books;
    if (author) {
      books = await BookServices.getByAuthor(author)
    } else {
      books = await BookServices.getAll();
    }
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookServices.getById(id);
    if (book) return res.status(200).json(book);
    res.status(404).json({ message: 'Book not found' })
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

const createBook = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  try {
    const newBook = await BookServices.createBook(title, author, pageQuantity, publisher);
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;
  try {
    const updatedBook = await BookServices.updateBook(id, title, author, pageQuantity, publisher);
    if (updatedBook === 1) return res.status(200).json({ message: 'Book updated' });
    res.status(404).json({  message: 'Book not found' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await BookServices.remove(id);
    if (deletedBook === 1) return res.status(200).json({ message: 'Book removed' });
    res.status(404).json({  message: 'Book not found' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  remove
}