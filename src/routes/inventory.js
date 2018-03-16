const rp = require('request-promise');
const groupItems = require('../helpers/helper');

// const groupItems = (inventory) => {
//   const groupedItems = inventory.reduce((acc, item) => {
//     if (acc[item.category] === undefined) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});
//   return groupedItems;
// };
const models = require('../../models');

module.exports = {

  path: '/inventory',
  method: 'GET',
  handler: (req, res) => {
    models.inventories.findAll({ order: [['availableQuantity', 'DESC']] }).then((rows) => {
      if (rows.length === 0) {
        rp({
          url: 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/inventory',
          method: 'GET',
        }).then((inventory) => {
          const allItems = JSON.parse(inventory).inventory;
          models.inventories.bulkCreate(allItems).then(() => {
            const items = groupItems(allItems);
            res(items);
          });
        });
      } else {
        const group = groupItems(rows);
        res(group);
      }
    });
  },
};
// module.exports = groupItems;
