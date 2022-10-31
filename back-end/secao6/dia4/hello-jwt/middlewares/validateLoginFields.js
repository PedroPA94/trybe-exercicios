module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).json({ message: 'Os campos são obrigatórios' });
  }
  if (username.length < 5 || password.length < 5) {
    return res.status(401).json({ message: 'Os campos precisam de, no mínimo, 5 caracteres' });
  }

  next();
};