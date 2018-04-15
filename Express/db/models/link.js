'use strict';
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 128],
      },
    },
    target: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        isUrl: true,
      },
    },
    iconLink: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        isUrl: true,
      },
    },
    isHidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {});
  Link.associate = function(models) {
    const {
      LinkCategory,
    } = models;
    Link.belongsTo(LinkCategory, {
      foreignKey: {
        allowNull: false,
      },
    });
    LinkCategory.hasMany(Link, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };
  return Link;
};
