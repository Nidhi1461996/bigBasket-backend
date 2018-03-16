module.exports = (sequelize, DataTypes) => {
  const inventory = sequelize.define('inventories', {
    itemId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    brand: DataTypes.STRING,
    title: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    availableQuantity: DataTypes.INTEGER,
  }, {});
  inventory.associate = function (models) {
    // associations can be defined here
  };
  return inventory;
};
