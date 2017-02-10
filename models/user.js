const bcrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: 'ADMIN',
    }
  }, {
    hooks: {
      beforeCreate: (user,options) => {
        console.log('about to create');
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(), null);
      },
      beforeSave: (user,options) => {
        console.log('about to save');
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(), null);
      }
    },
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      },
    },
    freezeTableName: true,
    instanceMethods: {
      verifyPassword: (password) => {
        return bcrypt.compareSync(password, this.password);
      },
    }
  });
  return User;
};
