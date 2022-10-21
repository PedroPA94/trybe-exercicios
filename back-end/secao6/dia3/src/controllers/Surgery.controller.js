const SurgeryService = require('../services/Surgery.service');

const getSurgeriesByDoctor = async (req, res) => {
  const { doctor } = req.params;
  const surgeries = await SurgeryService.getSurgeriesByDoctor(doctor);
  if (surgeries) return res.status(200).json(surgeries);
  res.status(404).json({ message: 'Doctor not found' });
};

module.exports = {
  getSurgeriesByDoctor,
};