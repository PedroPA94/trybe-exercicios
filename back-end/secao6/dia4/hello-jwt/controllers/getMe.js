module.exports = async (req, res) => {
  const { decoded } = req;
  const user = {
    usernmae: decoded.username,
    admin: decoded.admin,
  };
  return res.status(201).json({ user });
};