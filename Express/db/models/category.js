'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobCategory = sequelize.define('JobCategory', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {});
  JobCategory.associate = function(models) {
    // associations can be defined here
  };
  return JobCategory;
};
