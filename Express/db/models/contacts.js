'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define('Contacts', {
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
  Contacts.associate = function(models) {
    // associations can be defined here
  };
  return Contacts;
};
