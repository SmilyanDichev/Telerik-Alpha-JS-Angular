'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserJob = sequelize.define('UserJob', {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 1024],
      },
    },
    cvUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    letterUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});
  UserJob.associate = function(models) {
    // associations can be defined here
  };
  return UserJob;
};
