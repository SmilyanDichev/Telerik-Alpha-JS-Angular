'use strict';
module.exports = (sequelize, DataTypes) => {
  const LinkCategory = sequelize.define('LinkCategory', {
    name: DataTypes.STRING,
  }, {});
  LinkCategory.associate = function(models) {
    // associations can be defined here
  };
  return LinkCategory;
};
