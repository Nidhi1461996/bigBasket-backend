const models = require('../../models');

module.exports = {

  path: '/checkout',
  method: 'POST',
  handler: (req, res) => {
    const items = req.payload.orderDetails;
    const merged = [].concat.apply([], items);
    console.log(merged);
    if (merged.length !== 0) {
      models.orders.create({}).then((row) => {
        const newItems = merged.map(item =>
          // item.orderId = row.id;
          ({
            subTotal: item.tot,
            quantity: item.quantity,
            itemId: item.itemId,
            orderId: row.id,
          }));
        models.orderDetails.bulkCreate(newItems).then(() => res(items));
      });
    } else {
      res({ status: 'ok' });
    }
    // const items = req.payload.orderDetails;
    // const merged = [].concat.apply([], items);
    // for (let i = 0; i < merged.length; i += 1) {
    //   if (merged[i].quantity)
    // }
  },
};

