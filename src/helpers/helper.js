const groupItems = (inventory) => {
  const groupedItems = inventory.reduce((acc, item) => {
    if (acc[item.category] === undefined) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  return groupedItems;
};
module.exports = groupItems;
