'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', 
      [
        {
          title: 'Seed',
          author: 'Seeder',
          pageQuantity: '150',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  }
};
