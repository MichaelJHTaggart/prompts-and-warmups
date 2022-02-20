function orderFood(list) {
  return list.reduce((acc, item) => {
    acc[item.meal] = (acc[item.meal] || 0) + 1;
    return acc;
  }, {});
}