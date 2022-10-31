const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  const secret = 'SuperS3cr3t';

  if (!token) return res.status(401).json({ error: 'Token não encontrado' });

  try {
    const decoded = jwt.verify(token, secret);
    req.decoded = decoded.data;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: e.message });
  }
};