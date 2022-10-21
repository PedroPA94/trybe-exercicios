const AccountService = require('../services/account.service');

const getAccountById = async (req, res) => {
  const { id } = req.params;
  try {
    const account = await AccountService.getAccountById(id);
    if (account.length) return res.status(200).json(account[0]);
    res.status(404).json({ message: 'Account not found' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const lazyGetAccountById = async (req, res) => {
  const { id } = req.params;
  try {
    const account = await AccountService.lazyGetAccountById(id);
    if (account.length) return res.status(200).json(account[0]);
    res.status(404).json({ message: 'Account not found' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const getAccountComments = async (req, res) => {
  const { id } = req.params;
  try {
    const comments = await AccountService.getAccountComments(id);
    if (comments.length) return res.status(200).json(comments);
    res.status(404).json({ message: 'Nenhum comentário cadastrado' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const createAccount = async (req, res) => {
  const { email, password, firstName, lastName, phone } = req.body;
  try {
    const newAccount = await AccountService
    .createAccount({ email, password, firstName, lastName, phone });
  res.status(201).json(newAccount);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const newComment = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  try {
    const account = await AccountService.lazyGetAccountById(id);
    if (account.length) {
      await AccountService.newComment(id, message);
      return res.status(201).json({ message: 'New comment posted!' });
    }
    res.status(404).json({ message: 'Account not found' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getAccountById,
  lazyGetAccountById,
  getAccountComments,
  createAccount,
  newComment,
};