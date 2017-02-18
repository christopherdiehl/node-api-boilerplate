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
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'ADMIN',
    },
    resetToken: DataTypes.STRING,
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
      verifyPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      },
      generateResetToken: function() {
        return (Math.random().toString(36)+'00000000000000000').slice(2, 14);
      }
    }
  });
// // //  FORCE FOR NOW Use only if make model changes
//   if ( process.env.NODE_ENV === "test") {
//     User.sync({force: true}).then(() => {
//       console.log('Sequelize forced');
//     })
//   }

  return User;
};
