'use strict';
module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('contact', {
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
  contact.associate = function(models) {
    // associations can be defined here
  };
  return contact;
};
