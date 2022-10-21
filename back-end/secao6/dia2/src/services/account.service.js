const { Account, Profile, Comment } = require('../models');

const getAccountById = async (id) => {
  const account = await Account.findAll({ 
    where: { id },
    include: [{ model: Profile, as: 'profile' }],
  });
  return account;
};

const lazyGetAccountById = async (id) => {
  const account = await Account.findAll({ where: { id } });
  return account;
};

const getAccountComments = async (id) => {
  const comments = await Comment.findAll({ where: { accountId: id } });
  return comments;
};

const createAccount = async ({ email, password, firstName, lastName, phone }) => {
  const newAccount = await Account.create({ email, password });
  const newProfile = await Profile.create({ firstName, lastName, phone, accountId: newAccount.id });
  return newProfile;
};

const newComment = async (id, message) => {
  await Comment.create({ accountId: id, message, upvoting: 0, downvoting: 0 });
};

module.exports = {
  getAccountById,
  lazyGetAccountById,
  getAccountComments,
  createAccount,
  newComment,
};