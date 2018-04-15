'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        len: [3, 1024],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 256],
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100],
        isAlpha: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100],
        isAlpha: true,
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {});
  User.associate = function(models) {
    const {
      Job,
    } = models;
    // UserJobs = sequelize.define('user_jobs', {
 
    // });
    User.belongsToMany(Job, {
       through: 'UserJobs',
      });
    Job.belongsToMany(User, {
      through: 'UserJobs',
    });
  };
  return User;
};
