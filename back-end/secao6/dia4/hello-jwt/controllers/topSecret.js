module.exports = async (req, res) => {
  const { decoded } = req;

  if (!decoded.admin) return res.status(401).json({ message: 'Restricted access' });
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
};