const sequelize = require('../config/db')
const DataTypes  = require('sequelize');
const CommentModel = sequelize.define(
    'Comment',
    {
      id:
        {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4 ,
            primaryKey : true
          }
      ,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
     
      },
     
    },
    
  );

  module.exports = CommentModel