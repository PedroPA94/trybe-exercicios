const bodyParser = require('body-parser');
const express = require('express');
const AccountController = require('./controllers/account.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id/comments', AccountController.getAccountComments);
app.post('/accounts/:id/comment', AccountController.newComment);
app.get('/accounts/:id', AccountController.getAccountById);
app.get('/accounts-v2/:id', AccountController.lazyGetAccountById);
app.post('/accounts', AccountController.createAccount);

module.exports = app;
