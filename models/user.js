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
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      },
      freezeTableName: true,
      hooks: {
        beforeSave: (user,options) => {
          user.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        }
      },
      instanceMethods: {
        validPassword: (password) => {
          return bcrypt.compareSync(password, this.password);
        },
      }
    }
  });
  return User;
};
