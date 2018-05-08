'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isMapAddress: {
      type: DataTypes.BOOLEAN,
    },
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};
