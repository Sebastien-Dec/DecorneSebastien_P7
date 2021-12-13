'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
    username: 'Sébastien',
    email: 'sebastien@gmail.com',
    password: 'sebastien',
    type: 'moderator',
    state: 'Actif',
    createdAt: new Date,
    updatedAt: new Date    
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    
  }
};
