module.exports = (req, res, next) => {
  const { createdAt } = req.body.description;

  const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

  if (!regex.test(createdAt)) {
    return res.status(400).json({ message: 'Data precisa ser no formato dd/mm/aaaa' });
  }

  next();
};