'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.USer, {
        foreignKey: 'User_Id',
        onDelete: 'CASCADE'
      }),
      Comment.belongsTo(models.Publication, {
        foreignKey: 'Publication_Id',
        onDelete: 'CASCADE'
      }) 
    }
  };
  Comment.init({
    comment: DataTypes.STRING,
    User_Id: DataTypes.INTEGER,
    Publication_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};