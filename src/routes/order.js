const models = require('../../models');

module.exports = {

  path: '/order',
  method: 'GET',
  handler: (req, res) => {
    models.orders.findAll({
      limit: 10,
      order: [['createdAt', 'DESC']],
      include: [{// Notice `include` takes an ARRAY
        model: models.orderDetails,
      }],
    }).then((orders) => {
      res(orders);
    });
  },
};

