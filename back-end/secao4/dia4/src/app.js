const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validadeCreatedAt = require('./middlewares/validadeCreatedAt');
const validadeRating = require('./middlewares/validadeRating');
const validadeDifficulty = require('./middlewares/validadeDifficulty');
const validateSignUp = require('./middlewares/validateSignUp');
const generateToken = require('./utils/generateToken');
const validateToken = require('./middlewares/validateToken');

const app = express();

app.use(express.json());

app.post('/activities',
  validateToken,
  validateName, 
  validatePrice, 
  validateDescription,
  validadeCreatedAt,
  validadeRating,
  validadeDifficulty,
  (_req, res) => {
  res.status(200).json({ message: 'Atividade cadastrada com sucesso! '});
});

app.post('./signup', validateSignUp, (_req, res) => {
  const token = generateToken();

  res.status(200).json({ token: `${token}` })
});

module.exports = app;