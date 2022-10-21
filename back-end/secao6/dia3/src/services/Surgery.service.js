const { Op } = require('sequelize');
const { Surgery } = require('../models');

const getSurgeriesByDoctor = async (doctor) => {
  const surgeries = await Surgery.findAll({
    where: {
      doctor: {
        [Op.like]: `%${doctor}%`,
      },
    },
  });
  return surgeries;
};

module.exports = {
  getSurgeriesByDoctor,
};