'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publication.belongsTo(models.User, {
        foreignKey: 'User_Id',
        onDelete: 'CASCADE'
      }),
      Publication.hasMany(models.Comment, {
        foreignKey: 'Publication_Id',
        onDelete: 'CASCADE'
      }) 
    }
  };
  Publication.init({
    title: DataTypes.STRING,
    gifUrl: DataTypes.STRING,
    text: DataTypes.STRING,
    User_Id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Publication',
  });
  return Publication;
};