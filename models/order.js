module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {}, {});
  orders.associate = function (models) {
    // associations can be defined here
    models.orders.hasMany(models.orderDetails);
  };
  return orders;
};
