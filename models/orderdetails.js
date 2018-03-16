module.exports = (sequelize, DataTypes) => {
  const orderDetails = sequelize.define('orderDetails', {
    orderId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    subTotal: DataTypes.INTEGER,
  }, {});
  orderDetails.associate = function (models) {
    // associations can be defined here
  };
  return orderDetails;
};
