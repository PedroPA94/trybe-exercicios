const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const secret = 'SuperS3cr3t';
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const adminPwd = 's3nh4S3gur4???';

  const admin = username === 'admin' && password === adminPwd;

  const token = jwt.sign({ data: { username, admin } }, secret, jwtConfig);

  res.status(201).json({ token });
};