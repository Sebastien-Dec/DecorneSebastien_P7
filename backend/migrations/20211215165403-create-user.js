'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      type: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(20),
        defaultValue: 'Actif'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  }, 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};